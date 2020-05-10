import {ADD_TODO} from './task.actions';

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
    default:
      return state
  }
}

export default todosReducer
