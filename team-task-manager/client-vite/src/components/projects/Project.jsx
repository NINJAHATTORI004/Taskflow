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
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block">
                        <svg className="animate-spin h-12 w-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                    <p className="text-lg text-gray-600 mt-4">Loading tasks...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white shadow-md border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Task Board</h1>
                                <p className="text-sm text-gray-600 mt-1">Drag and drop tasks between columns</p>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                        <p className="text-sm text-red-800 font-medium">{error}</p>
                    </div>
                )}

                {tasks.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                        <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-gray-600 text-lg font-medium">No tasks yet</p>
                        <p className="text-gray-500 text-sm mt-2">Create a task to start managing your project</p>
                    </div>
                )}

                {tasks.length > 0 && <TaskBoard tasks={tasks} setTasks={setTasks} />}
            </div>
        </div>
    );
};

export default Project;
