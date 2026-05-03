const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { name, teamMembers } = req.body;

  try {
    const newProject = new Project({
      name,
      createdBy: req.user.id,
      teamMembers,
    });

    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      $or: [{ createdBy: req.user.id }, { teamMembers: req.user.id }],
    }).populate('createdBy', ['name', 'email']).populate('teamMembers', ['name', 'email']);
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addMember = async (req, res) => {
    const { userId } = req.body;
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        if (project.teamMembers.includes(userId)) {
            return res.status(400).json({ msg: 'User already in project' });
        }

        project.teamMembers.push(userId);
        await project.save();
        res.json(project.teamMembers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.removeMember = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        project.teamMembers = project.teamMembers.filter(
            (member) => member.toString() !== req.params.memberId
        );

        await project.save();
        res.json(project.teamMembers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
