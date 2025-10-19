import React, { useContext } from "react";
import DataContextProvider, { DataContext } from "./NativeContexts/context";

//do get and post for all the conext State Managements:
//Recoil , zustand , redux , context , reduxtookit , Redux Thunx

// context api -- Native Reacts
const ContextText = () => {
    const data = useContext(DataContext);
    console.log(data)
    return <div>ContextText</div>;
};

export default ContextText;
