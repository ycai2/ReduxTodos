// import { stuff } from '../actions/something';

const TodosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default TodosReducer;
