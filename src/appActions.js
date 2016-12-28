export const addTodo = (id, title) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id,
      title,
      completed: false
    }
  }
}
export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  }
}
export const editTodo = (id, attr) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id,
      attr
    }
  }
}
