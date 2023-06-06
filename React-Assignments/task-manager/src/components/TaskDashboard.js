import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/tasks', {
        headers: {
          Authorization: 'Bearer YOUR_TOKEN_HERE'
        }
      });
      const { tasks } = response.data;

      setTasks(tasks);
    } catch (error) {
      console.log(error);
      alert('An error occurred while fetching tasks.');
    }
  };

  return (
    <div>
      <h2>Task Dashboard</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
