import { Link } from 'react-router-dom'
import { AppBar,Toolbar, Typography,Container } from '@mui/material'

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Container>
                <Toolbar>
                <Typography variant='h6'>Todo App</Typography>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>All</Link>
                <Link to="/?todos=active" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>Active</Link>
                <Link to="/?todos=completed" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>Completed</Link>
                </Toolbar>
      </Container>
      </AppBar>
    )
  }
  
  export default Navbar