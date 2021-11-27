import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from "./useLocalStorageState" //Imports the function from useLocalStorageState. 


function useToDoState(initialTodos)/*export default initialTodos =>*/ { //initialTodos is a parameter. And in ToDoApp "starter" is being passed in as an argument?

    const [todos, setTodos] = useLocalStorageState("todos", initialTodos); //The value of todos is set to whatever the function in useLocalStorageState is producing. "todos" is the key argument in the function. "todos", initialTodos are arguments being passed in to the useLocalStorageState function.

    return { //return an object, all thes function names are the keys with the values being the body of the functions.
        todos, //The value of the todos above

        addTodo: (newText) => {
            setTodos([...todos, { id: uuidv4(), task: newText, completed: false }]) //This function will overwrite and replace existing todos. 
        },

        removeTodo: (todoId) => { //todoId is the .id value from the todo component you are activating this function from. 
            //Filter out the removed todo. 
            const updatedTodos = todos.filter((todo) => todo.id !== todoId) //create an array of todos where the id of the todo does not match the id that was passed in. This will filter out the one todo with the id that was passed in. 
            setTodos(updatedTodos) //Call set setTodos with new updatedTodos array created above that has everything but the todo with the id . 
        },

        toggleComplete: (todoId) => {
            const updatedTodos = todos.map((todo) => //maps over all the todos 
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo//Map over current todos, check if the todo.id of the todo the map is looking at is equal to the id that was passed in, if they match, set that todo to be the same with all the same data but its completed value to be the opposite of what it was, like a toggle. If the ids dont match, return the regular todo as it is. 
            );
            setTodos(updatedTodos); //Set todos to be the updated modified array created above. 
        },

        editTodo: (todoId, newTask) => { //This function operates very similarly to above. 
            const updatedTodos = todos.map((todo) =>
                todo.id === todoId ? { ...todo, task: newTask } : todo //Ternary operator 
            );
            setTodos(updatedTodos);
        }
    }
}

export default useToDoState;