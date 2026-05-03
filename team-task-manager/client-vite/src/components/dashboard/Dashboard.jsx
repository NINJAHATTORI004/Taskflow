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
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <p className="text-lg text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Team Task Manager</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

                {error && (
                    <div className="rounded-md bg-red-50 p-4 mb-4">
                        <p className="text-sm text-red-700">{error}</p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-4 bg-blue-100 rounded-lg">
                        <h2 className="text-lg font-bold">Total Tasks</h2>
                        <p className="text-3xl">{stats.total}</p>
                    </div>
                    <div className="p-4 bg-green-100 rounded-lg">
                        <h2 className="text-lg font-bold">Completed Tasks</h2>
                        <p className="text-3xl">{stats.completed}</p>
                    </div>
                    <div className="p-4 bg-red-100 rounded-lg">
                        <h2 className="text-lg font-bold">Overdue Tasks</h2>
                        <p className="text-3xl">{stats.overdue}</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-2">Projects</h2>
                    {projects.length === 0 ? (
                        <p className="text-gray-600">No projects yet</p>
                    ) : (
                        <ul className="space-y-2">
                            {projects.map(p => (
                                <li key={p._id} className="mb-2">
                                    <Link to={`/project/${p._id}`} className="text-blue-600 hover:underline text-lg">
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
