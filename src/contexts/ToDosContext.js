import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducerHook" //Imports the useLocalStorageReducer function.
import reducer from "../reducers/toDoReducer" //Imports the reducer function from toDoReducer
//import useToDoState from "../hooks/useToDoState"; reducer replaces all of the functions in this, no longer needed. 

const defaultToDos = [
    { id: 1, task: "Default task 1", completed: false },
    { id: 2, task: "Default task 2", completed: true }
];

export const ToDosContext = createContext();
export const DispatchContext = createContext(); //This is needed because without it, every component would be re-rendering whenever the todos were altered beause everything is wrapped in ToDosContext.Provider, eg the new todo form component would be re-rendering when a todo was toggled to complete and so forth. This serves as another context used only when a todo is updated in some way. 

export function ToDosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("contexttodos", defaultToDos, reducer); // IN the square brackets you can see destructuring. These 3 are the arguments being passed into useLocalStorageReducer. contexttodos is the key that we are looking for in localstorage, dispatch the function that modifies it. In this case, dispatch is the "reducer" function from toDoReducer, when you want to use the reducer function in your components you will need to call "dispatch". 

    //const toDoStuff = useToDoState(defaultToDos);
    return (
        <ToDosContext.Provider value={{ todos: todos }}> {/* todos and dispatch are being passed in as props, todos being passed in as the value of a prop named todos & the same with dispatch. */}
            <DispatchContext.Provider value={{ dispatch: dispatch }}> {/*DispatchContext.Provider is wrapped by the external ToDosContext provider, this prevents every component re-rendering every time a todo is altered. */}
                {props.children}
            </DispatchContext.Provider>
        </ToDosContext.Provider>
    )
}

export default ToDosProvider;