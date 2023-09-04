import { useTodos } from '../store/Todos';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useSearchParams} from 'react-router-dom'
import { styled } from '@mui/material/styles';

const RedText = styled('span')({
    color: 'red',
    textDecoration: 'line-through',
  });

const Todo = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
      let todoData = searchParams.get("todos");
      
      let filerData = todos
      if(todoData==="active"){
         filerData=filerData.filter((task)=>!task.completed)
      }
      if(todoData==="completed"){
          filerData=filerData.filter((task)=>task.completed)
       }
  
  return (
    <Container>
        <Grid item xs={12} sm={8} md={6}>
          <List>
            {filerData.map((todo,index) => (
              <ListItem key={todo.id}>
                <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onChange={() => toggleTodoAsCompleted(todo.id)}
                />
                <ListItemText
                primary={
                  todo.completed ? (
                    <RedText>{`${index + 1}.${todo.task}`}</RedText>
                  ) : (
                    `${index + 1}.${todo.task}`
                  )
                }
                style={{ marginLeft: '10px' }}
              />
                {todo.completed && (
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteTodo(todo.id)}
                    style={{ marginLeft: '10px' }}
                  >
                    Delete
                  </Button>
                )}
              </ListItem>
            ))}
          </List>
        </Grid>
    </Container>
  );
};

export default Todo;
