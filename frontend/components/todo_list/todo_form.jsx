import React from 'react';

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

  createTodo(e) {
    e.preventDefault();
    this.props.createTodo(this.state);
    // this.state = { title: "", body: "" };
  }

  render() {
    const data = {
      todo: {
        title: this.state.title,
        body: this.state.body,
      }
    };

    return (
      <form onSubmit={this.createTodo}>
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
