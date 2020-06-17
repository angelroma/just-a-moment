import {ADD_TODO, COMPLETE_TODO} from './task.actions';

const initialState = [
  {
    id: 1,
    text: "RUN",
    completed: false
  },
  {
    id: 2,
    text: "READ",
    completed: false
  },
];

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
    default:
      return state
  }
}

export default todosReducer
