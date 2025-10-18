import React, { useRef } from "react";

const UnControlled = () => {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };
    const onHandleSubmit = () => {
        console.log(inputElement.current.value)
    }

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
            <button onClick={onHandleSubmit}>click</button>
        </>
    );
};

export default UnControlled;
