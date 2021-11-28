import React, { createContext, useReducer } from "react";
import reducer from "../reducers/toDoReducer"
import useToDoState from "../hooks/useToDoState";

const defaultToDos = [
    { id: 1, task: "Stop worrying", completed: false },
    { id: 2, task: "Go to gym", completed: false }
];

export const ToDosContext = createContext();

export function ToDosProvider(props) {
    const [todos, dispatch] = useReducer(reducer, defaultToDos); //todos is the state, dispatch the function that modifies it. In this case, dispatch is the "reducer" function from toDoReducer, when you want to use the reducer function in your components you will need to call "dispatch". 

    //const toDoStuff = useToDoState(defaultToDos);
    return(
        <ToDosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </ToDosContext.Provider>
    )
}

export default ToDosProvider;