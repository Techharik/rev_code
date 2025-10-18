import React from "react";

const Buttons = ({ props, className }) => {
    return <button className={`px-2 py-2 bg-yellow-400 border-2 ${className}`}>
        {props.lable}
        {props.style}
    </button>;
};

export default Buttons;
