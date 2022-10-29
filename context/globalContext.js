import { createContext, useReducer } from 'react';

// Initialize the state
const initialState = {
  darkTheme: true,
  todos: [
    { id: 0, title: 'First Todo', isCompleted: false },
    { id: 1, title: 'Second Todo', isCompleted: false },
    { id: 2, title: 'Third Todo', isCompleted: false },
    { id: 3, title: 'Fourth Todo', isCompleted: false },
  ],
};

// Reducers
const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [action.todo, ...state.todos],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    default:
      return state;
  }
};

// Create the context
export const GlobalContext = createContext(initialState);

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
