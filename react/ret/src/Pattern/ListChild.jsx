import React from "react";

const ListChild = ({ props }) => {
    console.log(props)
    return <div>{props.name}</div>;
};

export default ListChild;
