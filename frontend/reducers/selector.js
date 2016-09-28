const allTodos = (state) => {
  const todoIds = Object.keys(state.todos);
  return todoIds.map(id => state.todos[id]);
};

export default allTodos; 
