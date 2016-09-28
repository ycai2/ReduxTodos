import React from 'react';

const TodoListItem = ({ todo, toggleTodo }) => (
  <li>
    {todo.title}
    <button onClick={toggleTodo.bind(null, todo)}>{ todo.done ? "Done" : "Not Done" }</button>
    // <button onClick={destroyTodo.bind(null, todo)}>Delete</button>
  </li>
);

export default TodoListItem;
