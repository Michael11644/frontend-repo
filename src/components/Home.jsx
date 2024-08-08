// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const NavButton = styled(Link)`
  display: inline-block;
  margin: 10px;
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

const Home = () => {
  return (
    <Container>
      <Title>Home Page</Title>
      <NavButton to="/employees">View All Employees</NavButton>
      <NavButton to="/tasks">View All Tasks</NavButton>
    </Container>
  );
};

export default Home;


