import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    );
  }
}

export default TodoList;
