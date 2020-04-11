import { combineReducers } from 'redux'
import todosReducer from './todos.reducer'
import modalReducer from './modal.reducer'

export default combineReducers({
  todos: todosReducer,
  modalReducer: modalReducer
})
