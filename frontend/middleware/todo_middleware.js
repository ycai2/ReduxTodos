import {
  REQUEST_TODOS,
  CREATE_TODO,
  receiveTodos,
  receiveTodo
} from '../actions/todo_actions';
import { fetchTodos, createTodo } from '../util/todo_api_util';


const TodoMiddleware = ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case REQUEST_TODOS: {
      const success = data => dispatch(receiveTodos(data));
      const error = e => console.log(e);
      fetchTodos(success, error);
      break;
    }
    case CREATE_TODO: {
      const success = data => dispatch(receiveTodo(data));
      const error = e => console.log(e);
      createTodo(action.todo, success, error);
      break;
    }
    default: {
      return next(action);
    }
  }
};

export default TodoMiddleware;
