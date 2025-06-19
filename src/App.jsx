import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import { ThemeProvider, CssBaseline, Container, Paper, List } from '@mui/material';
import { getTheme } from './theme';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TodoItem from './components/TodoItem';

function App() {
  const { themeMode, todos } = useContext(TodoContext);

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper sx={{ p: 3 }}>
          <TaskInput />
          <List>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </List>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;