import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestTodos, createTodo } from './actions/todo_actions';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestTodos = requestTodos;
  window.createTodo = createTodo;

  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
