import { combineReducers } from 'redux';
import TodosReducer from './reducer_todos';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  todos: TodosReducer,
  routing: routerReducer
});

export default rootReducer;