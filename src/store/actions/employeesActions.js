// src/store/actions/employeesActions.js
import axios from 'axios';

export const fetchEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3000/api/employees');
    dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_EMPLOYEES_FAIL', payload: error.message });
  }
};

export const fetchEmployee = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/employees/${id}`);
    dispatch({ type: 'FETCH_EMPLOYEE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_EMPLOYEE_FAIL', payload: error.message });
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/employees/${id}`);
    dispatch({ type: 'DELETE_EMPLOYEE_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_EMPLOYEE_FAIL', payload: error.message });
  }
};

export const addEmployee = (employee) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/api/employees', employee);
    dispatch({ type: 'ADD_EMPLOYEE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ADD_EMPLOYEE_FAIL', payload: error.message });
  }
};

