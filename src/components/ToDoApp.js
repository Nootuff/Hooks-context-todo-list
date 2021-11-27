import React from "react";
import useTodoState from "../hooks/useTodoState" //Import the functions from this file. 
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import ToDosProvider from "../contexts/ToDosContext";

function ToDoApp() {

  /*
  const initial = [
    { id: 1, task: "task 1", completed: false },
    { id: 2, task: "task 2", completed: true },
    { id: 3, task: "task 3", completed: false }
  ];


  useEffect(() => { useEffect imported from react above in the first brackets. It runs any time a component renders meaning it will be saving the todos and keeping them up to date on localstorage. 
window.localStorage.setItem("todos", JSON.stringify(todos)) The value of todos is being turned from an object to a string and sent to localstorage. 
  }, [todos]); todos here means useEffect will only run when the todos value is updated? */

  return (
    <Paper style={{ /*Paper is a component from material ui imported above.*/
      padding: 0,
      margin: 0,
      height: "100vh"
    }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todo App With with hooks & Context</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>{/*These numbers are the sizing like bootstraps responsive sizes.*/}
        <ToDosProvider>
          <ToDoForm/>
          <ToDoList/>
          </ToDosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ToDoApp;