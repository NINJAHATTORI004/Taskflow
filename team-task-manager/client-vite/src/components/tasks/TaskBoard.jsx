import React, { useState } from 'react';
import taskService from '../../services/taskService';
import { getErrorMessage } from '../../utils/errorHandler';

const TaskBoard = ({ tasks, setTasks }) => {
    const [error, setError] = useState('');

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = async (e, status) => {
        const taskId = e.dataTransfer.getData("taskId");
        try {
            setError('');
            const { data: updatedTask } = await taskService.updateTaskStatus(taskId, status);
            setTasks(tasks.map(t => t._id === taskId ? updatedTask : t));
        } catch (error) {
            setError(getErrorMessage(error));
            console.error(error);
        }
    }

    const onDragStart = (e, taskId) => {
        e.dataTransfer.setData("taskId", taskId);
    }

    const renderTasks = (status) => {
        return tasks
            .filter(task => task.status === status)
            .map(task => {
                const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'Done';
                return (
                    <div
                        key={task._id}
                        draggable
                        onDragStart={(e) => onDragStart(e, task._id)}
                        className={`p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-move border-l-4 mb-3 group ${
                            isOverdue
                                ? 'bg-red-50 border-red-500 hover:bg-red-100'
                                : 'bg-white border-gray-200 hover:border-blue-400'
                        }`}
                    >
                        <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-sm text-gray-900 flex-1 line-clamp-2">{task.title}</h4>
                            {isOverdue && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-200 text-red-800 ml-2">
                                    Overdue
                                </span>
                            )}
                        </div>
                        
                        {task.description && (
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">{task.description}</p>
                        )}
                        
                        <div className="space-y-2 text-xs">
                            {task.assignedTo && (
                                <div className="flex items-center text-gray-700">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-semibold mr-2">
                                        {task.assignedTo.name.charAt(0)}
                                    </div>
                                    <span className="truncate">{task.assignedTo.name}</span>
                                </div>
                            )}
                            {task.dueDate && (
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {new Date(task.dueDate).toLocaleDateString()}
                                </div>
                            )}
                        </div>
                    </div>
                );
            });
    };

    return (
        <>
            {error && (
                <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <p className="text-sm text-red-800 font-medium">{error}</p>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Todo Column */}
                <div
                    className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-md p-6 min-h-screen border-2 border-blue-200 transition-all duration-200"
                    onDragOver={onDragOver}
                    onDrop={(e) => onDrop(e, "Todo")}
                >
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">Todo</h3>
                        <span className="ml-auto bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {tasks.filter(t => t.status === 'Todo').length}
                        </span>
                    </div>
                    <div className="space-y-3">
                        {renderTasks('Todo')}
                        {tasks.filter(t => t.status === 'Todo').length === 0 && (
                            <div className="text-center py-8 text-gray-400">
                                <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                                <p className="text-sm">Drop tasks here</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* In Progress Column */}
                <div
                    className="bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-2xl shadow-md p-6 min-h-screen border-2 border-yellow-200 transition-all duration-200"
                    onDragOver={onDragOver}
                    onDrop={(e) => onDrop(e, "In Progress")}
                >
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white mr-3 animate-pulse">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">In Progress</h3>
                        <span className="ml-auto bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {tasks.filter(t => t.status === 'In Progress').length}
                        </span>
                    </div>
                    <div className="space-y-3">
                        {renderTasks('In Progress')}
                        {tasks.filter(t => t.status === 'In Progress').length === 0 && (
                            <div className="text-center py-8 text-gray-400">
                                <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                                <p className="text-sm">Drop tasks here</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Done Column */}
                <div
                    className="bg-gradient-to-b from-green-50 to-green-100 rounded-2xl shadow-md p-6 min-h-screen border-2 border-green-200 transition-all duration-200"
                    onDragOver={onDragOver}
                    onDrop={(e) => onDrop(e, "Done")}
                >
                    <div className="flex items-center mb-6">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mr-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">Done</h3>
                        <span className="ml-auto bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {tasks.filter(t => t.status === 'Done').length}
                        </span>
                    </div>
                    <div className="space-y-3">
                        {renderTasks('Done')}
                        {tasks.filter(t => t.status === 'Done').length === 0 && (
                            <div className="text-center py-8 text-gray-400">
                                <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                                <p className="text-sm">Drop tasks here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskBoard;
