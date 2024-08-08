// src/components/TaskList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, deleteTask } from '../store/actions/tasksActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const TaskListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const TaskItem = styled.li`
  border: 2px solid ${props => (props.status === 'completed' ? 'green' : props.status === 'in progress' ? 'orange' : 'red')};
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const TaskLink = styled(Link)`
  font-size: 18px;
  color: #007bff;
  font-weight: bold;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

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
    <Container>
      <Title>Tasks</Title>
      <BackButton to="/">Back to Home</BackButton>
      <TaskListContainer>
        {Array.isArray(tasks) && tasks.map((task) => (
          <TaskItem key={task.id} status={task.status}>
            <TaskLink to={`/tasks/${task.id}`}>Task #{task.id}: {task.description}</TaskLink>
            <p>Assigned to: Employee {task.employeeId || 'Unassigned'}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </TaskItem>
        ))}
      </TaskListContainer>
    </Container>
  );
};

export default TaskList;




