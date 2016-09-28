import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    return (
      <div>
        <TodoForm createTodo={this.props.createTodo} />
        <ul>
          {this.props.todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
