import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { requestTodos, createTodo } from '../../actions/todo_actions';
import allTodos from '../../reducers/selector';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestTodos: () => dispatch(requestTodos()),
    createTodo: (data) => dispatch(createTodo(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
