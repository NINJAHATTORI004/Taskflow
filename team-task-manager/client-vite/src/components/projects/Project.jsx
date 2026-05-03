import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import taskService from '../../services/taskService';
import TaskBoard from '../tasks/TaskBoard';
import { getErrorMessage } from '../../utils/errorHandler';

const Project = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id: projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setLoading(true);
                setError('');
                const { data } = await taskService.getTasks(projectId);
                setTasks(data);
            } catch (error) {
                setError(getErrorMessage(error));
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, [projectId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <p className="text-lg text-gray-600">Loading tasks...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Project Task Board</h1>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                        Back to Dashboard
                    </button>
                </div>

                {error && (
                    <div className="rounded-md bg-red-50 p-4 mb-4">
                        <p className="text-sm text-red-700">{error}</p>
                    </div>
                )}

                {tasks.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-600">No tasks yet. Create one to get started!</p>
                    </div>
                )}

                {tasks.length > 0 && <TaskBoard tasks={tasks} setTasks={setTasks} />}
            </div>
        </div>
    );
};

export default Project;
