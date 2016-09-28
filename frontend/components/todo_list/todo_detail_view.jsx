import React from 'react';

const TodoDetailView = ({ destroyTodo, todo }) => (
  <div>
    <p>{todo.body}</p>
    <button onClick={destroyTodo.bind(null, todo)}>Delete</button>
  </div>
);
