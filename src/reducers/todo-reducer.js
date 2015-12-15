const INITIAL_STATE = [];
const todo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    default:
      return state;
  };
}

export default todo;
