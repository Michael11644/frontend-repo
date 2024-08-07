// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/employees"><button>All Employees</button></Link>
      <Link to="/tasks"><button>All Tasks</button></Link>
    </div>
  );
};

export default Home;
