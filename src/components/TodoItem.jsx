import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({ todo }) {
  const { removeTodo, toggleComplete } = useContext(TodoContext);

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => removeTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
      <ListItemText
        primary={todo.text}
        sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
}