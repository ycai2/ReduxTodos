import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos } from './util/todo_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchTodos = fetchTodos;
  const store = configureStore();
  window.store = store;
  ReactDOM.render((<h1>Todos App</h1>), document.getElementById('content'));
});
