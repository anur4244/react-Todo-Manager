import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TextField, Button, Stack } from '@mui/material';

export default function TaskInput() {
  const { addTodo } = useContext(TodoContext);
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (!task.trim()) return;
    addTodo({ id: Date.now(), text: task, completed: false });
    setTask('');
  };

  return (
    <Stack direction="row" spacing={2} sx={{ my: 2 }}>
      <TextField
        fullWidth
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" onClick={handleAdd}>Add</Button>
    </Stack>
  );
}