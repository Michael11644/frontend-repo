import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../store/actions/employeesActions';

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, department };
    dispatch(createEmployee(employee));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
