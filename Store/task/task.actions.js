export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = payload => ({
  type: ADD_TODO,
  id: payload.id,
  text: payload.text,
});

export const completeTodo = payload =>{
  id: payload.id
}
