export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const LOAD_TODO = 'LOAD_TODO';


export const addTodo = payload => ({
  type: ADD_TODO,
  id: payload.id,
  text: payload.text,
});

export const completeTodo = payload =>{
  id: payload.id
}

export const loadTodoFromDatabase = payload =>({
  type: LOAD_TODO,
  data: payload.data.todos
})
