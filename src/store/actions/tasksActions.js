// src/store/actions/tasksActions.js
import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3000/api/tasks'); // Ensure the correct URL
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAIL', payload: error.message });
  }
};

export const fetchTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/tasks/${id}`); // Ensure the correct URL
    dispatch({ type: 'FETCH_TASK_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASK_FAIL', payload: error.message });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/tasks/${id}`); // Ensure the correct URL
    dispatch({ type: 'DELETE_TASK_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_TASK_FAIL', payload: error.message });
  }
};


