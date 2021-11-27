import { useState } from "react";

function useToggleState(initialVal = false) {
    const [state, setState] = useState(initialVal); //State is initially set to false
    
    const toggle = () => {
        setState(!state); //On activation of function, set state to the opposite of itself, false to true etc.
    };
    return [state, toggle];
}

export default useToggleState;