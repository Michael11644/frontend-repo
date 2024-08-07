// src/components/TaskList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask } from '../store/actions/tasksActions';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Tasks</h1>
      <Link to="/"><button>Back to Home</button></Link>
      <ul>
        {Array.isArray(tasks) && tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>Task #{task.id}: {task.description}</Link>
            <p>Assigned to: Employee {task.employeeId || 'Unassigned'}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;



