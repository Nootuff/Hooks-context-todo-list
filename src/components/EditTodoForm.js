import React, { useContext } from "react";
import useInputState from "../hooks/useInputState"
import TextField from '@mui/material/TextField';
import { ToDosContext } from "../contexts/ToDosContext";

function EditTodoForm({ id, task, toggleEdit }) {
    const { editTodo } = useContext( ToDosContext );
    const [value, handleChange, reset] = useInputState(task); //The 3 functions from useInputState all defined in that file, note the order is the same as in that file. value is set to "task" which is the text of the todo which is passed in in the first brackets. 
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault(); //Prvents from from reloading the page as is normal on form submission.
                editTodo(id, value);
                reset(); //Imported from useInputState.
                toggleEdit(); //Activates the function imported from ToDo that is defined in useToggleState. On submit it is activated setting isEditing to false again. 
            }}
style={{marginLeft: "1rem", width: "100%"}}
        >
            <TextField
                value={value} /**/
                onChange={handleChange}
               
                variant="standard"
                margin="normal"
                fullWidth /*fullwidth, autoFocus, variant and margin are all mui attributes. */
                autoFocus /*The line is immediatley there when you open the edit form*/
            />
        </form>
    )
}

export default EditTodoForm;