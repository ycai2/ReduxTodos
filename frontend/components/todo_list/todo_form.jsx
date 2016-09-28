import React from 'react';
import merge from 'lodash/merge';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.updateInput = this.updateInput.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  updateInput(key) {
    return (
      event => this.setState(
        {[key]: event.currentTarget.value}
      )
    );
  }

  createTodo(data) {
    return (event => {
      event.preventDefault();
      this.props.createTodo(data);
      this.state = { title: "", body: "" };
    });
  }

  render() {
    const data = {
      todo: {
        title: this.state.title,
        body: this.state.body,
      }
    };

    return (
      <form onSubmit={this.createTodo(data)}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={this.updateInput('title')} />

        <br />

        <label htmlFor="body">Body</label>
        <input
          id="body"
          type="text"
          value={this.state.body}
          onChange={this.updateInput('body')} />

        <br />

        <button>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
