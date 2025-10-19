import React from "react";
import { useNavigate } from "react-router";

const Test = () => {
    const navigate = useNavigate()
    return <div>
        This is Test Page in route
        <button onClick={() => navigate('/', { state: { name: 'hello' } })}>Click</button>
    </div >;
};

export default Test;
