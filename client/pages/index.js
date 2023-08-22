import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
