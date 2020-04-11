let nextTodoId = 0
export const ADD_TODO = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
