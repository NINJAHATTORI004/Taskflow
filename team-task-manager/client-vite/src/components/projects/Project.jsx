import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import taskService from '../../services/taskService';
import projectService from '../../services/projectService';
import TaskBoard from '../tasks/TaskBoard';
import { getErrorMessage } from '../../utils/errorHandler';

const Project = () => {
    const [tasks, setTasks] = useState([]);
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showAddMember, setShowAddMember] = useState(false);
    const [memberEmail, setMemberEmail] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const { id: projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError('');
                const { data: tasksData } = await taskService.getTasks(projectId);
                setTasks(tasksData);
                
                const { data: projectsData } = await projectService.getProjects();
                const currentProject = projectsData.find(p => p._id === projectId);
                setProject(currentProject);
            } catch (error) {
                setError(getErrorMessage(error));
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
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

    const handleAddMember = async (userId) => {
        try {
            setError('');
            await projectService.addMember(projectId, userId);
            // Refresh project data
            const { data: projectsData } = await projectService.getProjects();
            const updatedProject = projectsData.find(p => p._id === projectId);
            setProject(updatedProject);
            setShowAddMember(false);
            setMemberEmail('');
        } catch (err) {
            setError(getErrorMessage(err));
            console.error(err);
        }
    };

    const handleRemoveMember = async (memberId) => {
        if (window.confirm('Are you sure you want to remove this member?')) {
            try {
                setError('');
                await projectService.removeMember(projectId, memberId);
                // Refresh project data
                const { data: projectsData } = await projectService.getProjects();
                const updatedProject = projectsData.find(p => p._id === projectId);
                setProject(updatedProject);
            } catch (err) {
                setError(getErrorMessage(err));
                console.error(err);
            }
        }
    };

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

                {/* Team Members Section */}
                {project && (
                    <div className="mb-8 bg-white rounded-2xl shadow-md p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
                                <p className="text-sm text-gray-600 mt-1">Manage your project team</p>
                            </div>
                            <button
                                onClick={() => setShowAddMember(true)}
                                className="px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-200"
                            >
                                + Add Member
                            </button>
                        </div>

                        {/* Members Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.teamMembers && project.teamMembers.length > 0 ? (
                                project.teamMembers.map(member => (
                                    <div key={member._id} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-all">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{member.name}</p>
                                                    <p className="text-xs text-gray-600">{member.email}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleRemoveMember(member._id)}
                                                className="text-red-500 hover:text-red-700 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 col-span-full">No team members yet. Add one to get started.</p>
                            )}
                        </div>

                        {/* Add Member Modal */}
                        {showAddMember && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 rounded-lg">
                                <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Add Team Member</h3>
                                    <p className="text-sm text-gray-600 mb-4">Enter the user ID of the member you want to add to this project.</p>
                                    <input
                                        type="text"
                                        value={memberEmail}
                                        onChange={(e) => setMemberEmail(e.target.value)}
                                        placeholder="Enter user ID"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-6"
                                    />
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => {
                                                setShowAddMember(false);
                                                setMemberEmail('');
                                            }}
                                            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (!memberEmail.trim()) {
                                                    setError('Please enter a user ID');
                                                    return;
                                                }
                                                handleAddMember(memberEmail.trim());
                                            }}
                                            className="flex-1 px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all disabled:opacity-50"
                                        >
                                            Add Member
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
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

                {tasks.length > 0 && <TaskBoard tasks={tasks} setTasks={setTasks} project={project} />}
            </div>
        </div>
    );
};

export default Project;
