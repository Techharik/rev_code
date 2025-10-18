import React from "react";

const Card = ({ value, children }) => {
    return <div>{children}{value}</div>;
};

export default Card;
