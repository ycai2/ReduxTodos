// import { stuff } from '../actions/something';

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default TodosReducer;
