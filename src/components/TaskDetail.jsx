// src/components/TaskDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTask } from '../store/actions/tasksActions';
import { Link, useParams } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { task, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Task Detail</h1>
      <Link to="/tasks"><button>Back to Tasks</button></Link>
      <Link to="/"><button>Back to Home</button></Link>
      <p>Description: {task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <p>Assigned to: Employee {task.employeeId || 'Unassigned'}</p>
    </div>
  );
};

export default TaskDetail;


