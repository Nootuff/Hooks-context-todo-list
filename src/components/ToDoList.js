import React, { useContext } from "react";
import ToDo from "./ToDo";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import { ToDosContext } from "../contexts/ToDosContext"


function ToDoList() {

    const {todos} = useContext(ToDosContext);

    if (todos.length){ //if toDoData has length meaning length of more than 0 meaning there are todos present in the array, render the paper with the list inside. Else if not render null down below. 
    return (
        <Paper>
            <List>
                {todos.map((todo, index) => (
                    <React.Fragment key={index}> {/*This is something called called a React fragment, it ends with </> below, it groups elements together but doesn't result in extra markup on the page. You apparently need to use if here for the Divider below to work for some reason. */}
                        <ToDo
                            id={todo.id}
                            task={todo.task}
                            key={todo.id}
                             
                        />
                        {index < todos.length-1 ? <Divider /> : null /*Ternary operator, if index is less than props.toDoData.length-1, render a divider, else render nothing. This prevents the last todo having a deivider under it to make this look neater. Index is a new number generated with each todo? Not sure. */}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
    } else {
    return null; //Return nothing at all if no todos present. 
    }
}

export default ToDoList;