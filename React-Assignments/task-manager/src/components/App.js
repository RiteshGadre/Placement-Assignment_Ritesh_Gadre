import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import TaskDashboard from './TaskDashboard';
import CreateTaskForm from './CreateTaskForm';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={LoginForm} />
        <Route path="/dashboard" component={TaskDashboard} />
        <Route path="/create-task" component={CreateTaskForm} />
      </Routes>
    </Router>
  );
};

export default App;
