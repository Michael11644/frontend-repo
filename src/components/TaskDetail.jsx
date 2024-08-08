// src/components/TaskDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTask } from '../store/actions/tasksActions';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const TaskDetailContainer = styled.div`
  border: 2px solid ${props => (props.status === 'completed' ? 'green' : props.status === 'in progress' ? 'orange' : 'red')};
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  color: #333;
`;

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
    <Container>
      <Title>Task Detail</Title>
      <Link to="/tasks"><button>Back to Tasks</button></Link>
      <Link to="/"><button>Back to Home</button></Link>
      <TaskDetailContainer status={task.status}>
        <p>Description: {task.description}</p>
        <p>Priority: {task.priority}</p>
        <p>Status: {task.status}</p>
        <p>Assigned to: Employee {task.employeeId || 'Unassigned'}</p>
      </TaskDetailContainer>
    </Container>
  );
};

export default TaskDetail;








