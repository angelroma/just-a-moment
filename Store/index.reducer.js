import { combineReducers } from 'redux'
import modalReducer from './modal/modal.reducer'
import todosReducer from './task/task.reducer';

export default combineReducers({
  todos: todosReducer,
  modal: modalReducer
})
