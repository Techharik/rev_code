import React from "react";
import useCustomHook from "./Hooks/CustomHook";

const App = () => {
    const [data, loading, error] = useCustomHook("https://fakestoreapi.com/products");
    console.log(data, loading, error)
    return <div>App</div>;
};

export default App;
