// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import GlobalStyle from './styles/GlobalStyles';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<div className="page-container"><Home /></div>} />
          <Route path="/employees" element={<div className="page-container"><EmployeeList /></div>} />
          <Route path="/tasks" element={<div className="page-container"><TaskList /></div>} />
          <Route path="/tasks/:id" element={<div className="page-container"><TaskDetail /></div>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;









