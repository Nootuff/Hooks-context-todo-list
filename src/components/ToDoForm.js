import React, { useContext } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useInputState from "../hooks/useInputState"; //make sure this is right. 
import { DispatchContext } from "../contexts/ToDosContext"

function ToDoForm(props) {
    const [value, handleChange, reset] = useInputState(""); //The empty string is "value" in useInputState. 

    const { dispatch } = useContext(DispatchContext);

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={(event) => { //This function adds the entered todo to the list. 
                event.preventDefault(); //preventDefault prevents the default form behaviour of refreshing the page. 
                dispatch({ type: "ADD", task: value /*The value from the form inputted by user*/ })

                reset(); //This part then resets the form so the text field is cleared and empty again. 
            }}>
                <TextField value={value} onChange={handleChange} variant="standard" margin="normal" label="Add New ToDo" fullWidth />
            </form>
        </Paper>
    );
}

export default ToDoForm;