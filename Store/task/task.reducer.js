import { ADD_TODO, COMPLETE_TODO, LOAD_TODO } from './task.actions';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state,
        {
          todos: true
        }
      ]
    case LOAD_TODO:
      return [
        ...state,
        todos = action.data
      ]
    default:
      return state
  }
}

export default todosReducer
