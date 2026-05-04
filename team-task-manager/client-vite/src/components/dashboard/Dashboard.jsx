import React, { useState, useEffect } from 'react';
import projectService from '../../services/projectService';
import taskService from '../../services/taskService';
import { Link, useNavigate } from 'react-router-dom';
import { getErrorMessage } from '../../utils/errorHandler';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [stats, setStats] = useState({
        total: 0,
        completed: 0,
        overdue: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError('');
                const { data: projectsData } = await projectService.getProjects();
                setProjects(projectsData);

                const allTasks = [];
                for (const project of projectsData) {
                    try {
                        const { data: tasksData } = await taskService.getTasks(project._id);
                        allTasks.push(...tasksData);
                    } catch (taskError) {
                        console.error(`Error fetching tasks for project ${project._id}:`, taskError);
                    }
                }
                setTasks(allTasks);

                const total = allTasks.length;
                const completed = allTasks.filter(t => t.status === 'Done').length;
                const overdue = allTasks.filter(t => new Date(t.dueDate) < new Date() && t.status !== 'Done').length;
                setStats({ total, completed, overdue });

            } catch (error) {
                setError(getErrorMessage(error));
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block">
                        <svg className="animate-spin h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                    <p className="text-lg text-gray-600 mt-4">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">TaskFlow</h1>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && (
                    <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                        <p className="text-sm text-red-800 font-medium">{error}</p>
                    </div>
                )}

                {/* Stats Cards */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Total Tasks Card */}
                        <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-2">Total Tasks</p>
                                    <h3 className="text-4xl font-bold text-gray-900">{stats.total}</h3>
                                </div>
                                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Completed Tasks Card */}
                        <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-green-500 hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-2">Completed Tasks</p>
                                    <h3 className="text-4xl font-bold text-gray-900">{stats.completed}</h3>
                                    <p className="text-xs text-gray-500 mt-2">{stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}% done</p>
                                </div>
                                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Overdue Tasks Card */}
                        <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-red-500 hover:shadow-lg transition-all duration-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm font-medium mb-2">Overdue Tasks</p>
                                    <h3 className="text-4xl font-bold text-gray-900">{stats.overdue}</h3>
                                </div>
                                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Projects</h2>
                    {projects.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-2xl shadow-md">
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-gray-500 text-lg">No projects yet</p>
                            <p className="text-gray-400 text-sm mt-2">Create a project to get started</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map(p => (
                                <Link
                                    key={p._id}
                                    to={`/project/${p._id}`}
                                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-blue-500 group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 4H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {p.teamMembers?.length || 0} members
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
