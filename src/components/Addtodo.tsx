import React, { useState } from 'react';
import { useTodos } from '../store/Todos';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Addtodo = () => {
  const [todo, setTodo] = useState('');
  const { handleAddToDo } = useTodos();
  const [errors, setErrors] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() !== '') { 
      handleAddToDo(todo);
      setTodo('');
    }
    else{
      setErrors("Task Must contain value")
    }
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8}>
            <TextField
              id="standard-basic"
              label="Task"
              variant="standard"
              type="text"
              fullWidth
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              helperText={errors}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button type="submit" variant="contained" fullWidth>
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Addtodo;
