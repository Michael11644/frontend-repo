// src/components/EmployeeList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee, addEmployee } from '../store/actions/employeesActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const EmployeeListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const EmployeeItem = styled.li`
  border: 2px solid #007bff;
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const EmployeeInfo = styled.p`
  font-size: 18px;
  color: #333;
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

const AddEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;

  &::placeholder {
    color: #888;
  }
`;

const EmployeeList = () => {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employees);
  const [newEmployee, setNewEmployee] = useState({ firstName: '', lastName: '', department: '' });

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (employeeId) => {
    dispatch(deleteEmployee(employeeId));
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    dispatch(addEmployee(newEmployee));
    setNewEmployee({ firstName: '', lastName: '', department: '' });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <Title>Employees</Title>
      <BackButton to="/">Back to Home</BackButton>
      <AddEmployeeForm onSubmit={handleAddEmployee}>
        <Input
          type="text"
          placeholder="First Name"
          value={newEmployee.firstName}
          onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={newEmployee.lastName}
          onChange={(e) => setNewEmployee({ ...newEmployee, lastName: e.target.value })}
          required
        />
        <Input
          type="text"
          placeholder="Department"
          value={newEmployee.department}
          onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
          required
        />
        <button type="submit">Add Employee</button>
      </AddEmployeeForm>
      <EmployeeListContainer>
        {Array.isArray(employees) && employees.map((employee) => (
          <EmployeeItem key={employee.id}>
            <EmployeeInfo>{employee.firstName} {employee.lastName}</EmployeeInfo>
            <EmployeeInfo>Department: {employee.department}</EmployeeInfo>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </EmployeeItem>
        ))}
      </EmployeeListContainer>
    </Container>
  );
};

export default EmployeeList;






