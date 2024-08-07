const initialState = {
    employees: [],
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
      case 'CREATE_EMPLOYEE_SUCCESS':
        return {
          ...state,
          employees: [...state.employees, action.payload],
        };
      case 'CREATE_EMPLOYEE_FAIL':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default employeesReducer;
  