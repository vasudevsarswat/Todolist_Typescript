import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodosProvideer } from './store/Todos.tsx'
import {BrowserRouter } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const theme=createTheme({})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <TodosProvideer>
    <ThemeProvider theme={theme}>
      <App /> 
      </ThemeProvider>
    </TodosProvideer>
    </BrowserRouter>
  </React.StrictMode>,
)
