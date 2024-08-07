import axios from 'axios';

export const fetchEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3000/api/employees');
    dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_EMPLOYEES_FAIL', payload: error.message });
  }
};

export const createEmployee = (employee) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/api/employees', employee);
    dispatch({ type: 'CREATE_EMPLOYEE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'CREATE_EMPLOYEE_FAIL', payload: error.message });
  }
};
