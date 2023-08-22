import React, { useState } from 'react';
import axios from 'axios';

const CreateOrUpdateTaskForm = ({ refreshTasks, updateTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null); // Track the task being edited

    const handleCreateOrUpdateTask = async () => {
        try {
            if (editingTaskId) {
                // Update task
                const response = await axios.put(process.env.API_URL + `/tasks/${editingTaskId}`, { title, description });
                console.log(response.data);
                setEditingTaskId(null); // Clear the editing task ID
            } else {
                // Create task
                const response = await axios.post(process.env.API_URL + '/tasks', { title, description });
                console.log(response.data);
            }
            setTitle('');
            setDescription('');
            refreshTasks();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (taskId) => {
        const taskToEdit = refreshTasks.find(task => task._id === taskId);
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setEditingTaskId(taskId);
    };

    return (
        <div className='container row my-5'>
            <div className='col-4'>
                <input
                    className='form-control'
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='col-6'>
                <input
                    type="text"
                    className='form-control'
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='col-2'>
                {editingTaskId ? (
                    <>
                        <button className='btn btn-sm btn-primary' onClick={handleCreateOrUpdateTask}>Update Task</button>
                        <button className='btn btn-sm btn-secondary' onClick={() => setEditingTaskId(null)}>Cancel</button>
                    </>
                ) : (
                    <button className='btn btn-sm btn-secondary' onClick={handleCreateOrUpdateTask}>Create Task</button>
                )}
            </div>
        </div>
    );
};

export default CreateOrUpdateTaskForm;
