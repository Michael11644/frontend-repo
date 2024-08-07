import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import employeesReducer from './reducers/employeesReducer';
import tasksReducer from './reducers/tasksReducer';

const rootReducer = combineReducers({
  employees: employeesReducer,
  tasks: tasksReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
