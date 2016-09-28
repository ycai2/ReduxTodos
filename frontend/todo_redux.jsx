import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos } from './util/todo_api_util';
import configureStore from './store/store';
import allTodos from './reducers/selector';
import { requestTodos } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchTodos = fetchTodos;
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  window.requestTodos = requestTodos;
  
  ReactDOM.render((<h1>Todos App</h1>), document.getElementById('content'));
});
