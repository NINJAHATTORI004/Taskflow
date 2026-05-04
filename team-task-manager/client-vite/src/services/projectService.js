import http from './http';

const getProjects = () => {
    return http.get('/projects');
};

const createProject = (project) => {
    return http.post('/projects', project);
};

const addMember = (projectId, userId) => {
    return http.put(`/projects/${projectId}/members`, { userId });
};

const removeMember = (projectId, memberId) => {
    return http.delete(`/projects/${projectId}/members/${memberId}`);
};

const projectService = {
    getProjects,
    createProject,
    addMember,
    removeMember,
};

export default projectService;
