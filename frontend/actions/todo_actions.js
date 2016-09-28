export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DESTROY_TODO = 'DESTROY_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


export const requestTodos = () => ({
  type: REQUEST_TODOS,
});

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const createTodo = (todo) => ({
  type: CREATE_TODO,
  todo,
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});

export const toggleTodo = (todo) => ({
  type: UPDATE_TODO,
  todo: Object.assign({}, todo, { done: !todo.done }),
});

export const destroyTodo = (todo) => ({
  type: DESTROY_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});
