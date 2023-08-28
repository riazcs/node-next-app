import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ tasks, refreshTasks }) => {
  const API_URL = process.env.API_URL;
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState({ title: '', description: '' });

  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find((task) => task._id === taskId);
    setEditingTaskId(taskId);
    setEditedTask({ title: taskToEdit.title, description: taskToEdit.description });
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditedTask({ title: '', description: '' });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(API_URL + `/tasks/${editingTaskId}`, editedTask);
      setEditingTaskId(null);
      setEditedTask({ title: '', description: '' });
      refreshTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(API_URL + `/tasks/${taskId}`);
      refreshTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {editingTaskId === task._id ? (
              <>
                <input
                  type="text"
                  placeholder="Title"
                  value={editedTask.title}
                  onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={editedTask.description}
                  onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <strong>{task.title}</strong> - {task.description}
                <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(task._id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(task._id)} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
