import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [themeMode, setThemeMode] = useState('light');

  const addTodo = (todo) => setTodos(prev => [...prev, todo]);

  const removeTodo = (id) =>
    setTodos(prev => prev.filter(todo => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleTheme = () =>
    setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleComplete, themeMode, toggleTheme }}>
      {children}
    </TodoContext.Provider>
  );
};
