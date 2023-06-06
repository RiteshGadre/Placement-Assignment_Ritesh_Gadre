import React, { useState } from 'react';
import axios from 'axios';

const CreateTaskForm = () => {
  const [taskName, setTaskName] = useState('');

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://reqres.in/api/tasks',
        {
          name: taskName
        },
        {
          headers: {
            Authorization: 'Bearer YOUR_TOKEN_HERE'
          }
        }
      );
      const { task } = response.data;

      // Do something with the newly created task
      console.log(task);
    } catch (error) {
      console.log(error);
      alert('An error occurred while creating the task.');
    }
  };

  return (
    <div>
      <h3>Create New Task</h3>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
