// src/store/reducers/employeesReducer.js
const initialState = {
  employees: [],
  employee: {},
  loading: false,
  error: null,
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYEES_SUCCESS':
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };
    case 'FETCH_EMPLOYEES_FAIL':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'FETCH_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employee: action.payload,
        loading: false,
      };
    case 'FETCH_EMPLOYEE_FAIL':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'DELETE_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !== action.payload),
      };
    case 'DELETE_EMPLOYEE_FAIL':
      return {
        ...state,
        error: action.payload,
      };
    case 'ADD_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case 'ADD_EMPLOYEE_FAIL':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
