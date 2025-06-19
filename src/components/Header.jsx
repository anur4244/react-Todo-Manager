import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

export default function Header() {
  const { themeMode, toggleTheme } = useContext(TodoContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Todo Manager PRO</Typography>
        <Switch checked={themeMode === 'dark'} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
}