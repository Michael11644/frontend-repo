const initialState = {
    tasks: [],
    loading: false,
    error: null,
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_SUCCESS':
        return {
          ...state,
          tasks: action.payload,
          loading: false,
        };
      case 'FETCH_TASKS_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case 'CREATE_TASK_SUCCESS':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'CREATE_TASK_FAIL':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  