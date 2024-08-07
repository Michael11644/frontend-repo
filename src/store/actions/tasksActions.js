import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3000/api/tasks');
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAIL', payload: error.message });
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/api/tasks', task);
    dispatch({ type: 'CREATE_TASK_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'CREATE_TASK_FAIL', payload: error.message });
  }
};
