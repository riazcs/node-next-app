import { useState } from 'react';
import axios from 'axios';

const UpdateTask = ({ taskId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put(process.env.API_URL + `/tasks/${taskId}`, {
        title,
        description,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Task</button>
    </div>
  );
};

export default UpdateTask;
