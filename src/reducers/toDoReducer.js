import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => { //These are parameters, placeholders
    switch (action.type) {
        case "ADD": /*if action.type is add, run the function below*/
            return [...state, { id: uuidv4(), task: action.task, completed: false }]//This function will overwrite and replace existing todos. 
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.id) //create an array of todos where the id of the todo does not match the id that was passed in through action.id. This will filter out the one todo with the id that was passed in. 
        case "TOGGLECOMPLETE":
            return state.map((todo) => //maps over all the todos that are passed in as "state"
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo //Map over current todos, check if the todo.id of the todo the map is looking at is equal to the id that was passed in, if they match, set that todo to be the same with all the same data but its completed value to be the opposite of what it was, like a toggle. If the ids dont match, return the regular todo as it is. 
            );
        case "EDIT":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo //Ternary operator 
            );
        default: //Functions as an else, if the case does not match any of the above, just return the state as is with no changes. 
            return state;
    }
}

export default reducer;
