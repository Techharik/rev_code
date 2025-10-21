import React from "react";

const HOC = (Component) => {
    return (props) => {
        return <Component {...props} />
    }
};

export default HOC;
