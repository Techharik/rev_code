import React, { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import ChildHook from "./Hooks/ChildHook";
import { init, reducer } from "./Hooks/countReducer";
import Controllform from "./Hooks/Controllform";
import UnControlled from "./Hooks/unControlled";


let expensive = () => {
    /// doing the expensive function here and run everytime it creates only for dependecy changes
}

const App = () => {
    // Hooks
    const [counter, setState] = useState(0); //for state mangement .. return value and func to update.
    const [max, setMax] = useState({ firt: 'Hello' })
    // const expensiveValue = useMemo(expensive(), [max]); //only run the function once and after max changes
    // 6
    const [state, dispatch] = useReducer(reducer, init)
    console.log(state)
    const send = useCallback(function () {
        return 'hi'
    }, []); //if the function is passing to the child stop the child from rendering useCallback



    useEffect(() => {
        //Lycycle Hook if the state Update it will invoke we can put dependecy in the state too.
        console.log('first time') //intial and everytime the counter update it will render the hooks
    }, [counter])

    return <div>
        {
            counter
        }
        <button onClick={() => setState((prev) => prev + 2)}>click</button>

        {/* 3Hook about memo whenher the parent render that child is also render even though no relation is there */}
        {/* The child renders every time even no value is passed */}
        {/* inchild we need to use the memo hook for stop rendering */}
        {/* <ChildHook /> */}
        {/* What if a child has dependend state here like a props */}
        {/* Now the state changed the child has to render its a default behaviour now memo is not work */}
        {/* <ChildHook count={counter} /> */}
        {counter}
        {/* but here another problem even though the state props is not change the child will render if the passwed one was a object or refernce type*/}
        {/* 4) usecallback hook */}
        {/* if we pass a reference type mostly the function from parrent the child will always rerender it because everytime react render a new function is create in the memory to stop is use useCallback */}
        {/* useCallabck prevent the function form creating everytime and create only if dependency changes */}
        <ChildHook count={max} send={send} />

        {/* 5 use Memo funciton */}



        {/* Above Hook are for optimisation a componnet speific Hooks. */}

        {/* 6 )useReducer -- when we have want to maintain state speratly update it in centralized way useReducer. */}
        {/* The state and the methods of the state is added to the sepratre places */}
        {/* The problem is use Reducer is called only one component not act a centralized one. */}
        <div>
            <p>This value is coming from the reducer count</p>
            {state.count}
            <button onClick={() => dispatch({
                type: "increment"
            })}>click</button>
        </div>

        {/* Form states */}
        <Controllform />
        {/* using ref */}
        <UnControlled />
    </div>;
};

export default App;
