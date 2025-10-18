import React, { memo } from "react";

//if the state of the parent updates the child render to stop is use it memo
const ChildHook = memo(() => {
    //After memo only first time it render not everytime.
    console.log('I am child rendering here')

    return <div>ChildHook</div>;
})

export default ChildHook;
