// src/store/reducers/tasksReducer.js
const initialState = {
  tasks: [],
  task: {},
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
    case 'FETCH_TASK_SUCCESS':
      return {
        ...state,
        task: action.payload,
        loading: false,
      };
    case 'FETCH_TASK_FAIL':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'DELETE_TASK_SUCCESS':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'DELETE_TASK_FAIL':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;


