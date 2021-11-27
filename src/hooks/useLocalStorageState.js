import React, { useEffect, useState } from "react";

function useLocalStorageState(key, defaultValue) {// key and defaultValue are this function's parameters. 
    //Make piece of state 
    const [state, setState] = useState(() => { //state and setState are generic placeholder names. 
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue)) //Ternary operator If there's nothing in localstorage under the key that was passed in then set value to whatever defaulValue is? Don't know what String means in this context. Whatever this ternary operator returns we will set as the value of "value"
        } catch (error){ //If the try doesn't work jsut set value to whatever default is passed in. 
            value = defaultValue;
        }
        return value; //Whatever "value" ends up being, set as is returned. This while function sets the initial value of "state" in the . opening square brackets, ultimately, whatever "value" is, is the value of "state"
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state)) //send the value of "state" to localstorage 
    }, [state]); //state here means useEffect will only run & send the value of "state" to localStorage when the "state" value is updated. Whatever "state" is being used for, useEffect will activate when it changes. 
    return[state, setState]; //Return a value and a function to change it. 
}

export default useLocalStorageState;