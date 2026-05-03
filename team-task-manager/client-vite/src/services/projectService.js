import http from './http';

const getProjects = () => {
    return http.get('/projects');
};

const createProject = (project) => {
    return http.post('/projects', project);
};

const projectService = {
    getProjects,
    createProject,
};

export default projectService;
