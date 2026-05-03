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
            .map(task => (
                <div
                    key={task._id}
                    draggable
                    onDragStart={(e) => onDragStart(e, task._id)}
                    className={`p-2 mb-2 rounded-lg cursor-move hover:shadow-md transition-shadow ${new Date(task.dueDate) < new Date() && task.status !== 'Done' ? 'bg-red-200' : 'bg-gray-100'}`}
                >
                    <h4 className="font-bold text-sm">{task.title}</h4>
                    {task.description && <p className="text-xs text-gray-700">{task.description}</p>}
                    {task.assignedTo && <p className="text-xs text-gray-600">👤 {task.assignedTo.name}</p>}
                    {task.dueDate && <p className="text-xs text-gray-500">📅 {new Date(task.dueDate).toLocaleDateString()}</p>}
                </div>
            ));
    };

    return (
        <>
            {error && (
                <div className="rounded-md bg-red-50 p-4 mb-4">
                    <p className="text-sm text-red-700">{error}</p>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-200 rounded-lg min-h-96" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "Todo")}>
                    <h3 className="font-bold mb-2 text-lg">📋 Todo</h3>
                    {renderTasks('Todo')}
                </div>
                <div className="p-4 bg-gray-200 rounded-lg min-h-96" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "In Progress")}>
                    <h3 className="font-bold mb-2 text-lg">🔄 In Progress</h3>
                    {renderTasks('In Progress')}
                </div>
                <div className="p-4 bg-gray-200 rounded-lg min-h-96" onDragOver={onDragOver} onDrop={(e) => onDrop(e, "Done")}>
                    <h3 className="font-bold mb-2 text-lg">✅ Done</h3>
                    {renderTasks('Done')}
                </div>
            </div>
        </>
    );
};

export default TaskBoard;
