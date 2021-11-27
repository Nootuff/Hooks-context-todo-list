import { TouchApp } from "@mui/icons-material";
import React, { createContext } from "react";
import useToDoState from "../hooks/useToDoState";

const defaultToDos = [
    { id: 1, task: "Stop worrying", completed: false },
    { id: 2, task: "Go to gym", completed: false }
];

export const ToDosContext = createContext();

export function ToDosProvider(props) {
    const toDoStuff = useToDoState(defaultToDos);
    return(
        <ToDosContext.Provider value={toDoStuff}>
            {props.children}
        </ToDosContext.Provider>
    )
}

export default ToDosProvider;