import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { employeesReducer } from './employeesReducer';

const rootReducers = combineReducers({
  employees: employeesReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
