import http from './http';

const getTasks = (projectId) => {
    return http.get(`/tasks/project/${projectId}`);
};

const createTask = (task) => {
    return http.post('/tasks', task);
};

const updateTaskStatus = (taskId, status) => {
    return http.put(`/tasks/${taskId}/status`, { status });
};

const taskService = {
    getTasks,
    createTask,
    updateTaskStatus,
};

export default taskService;
