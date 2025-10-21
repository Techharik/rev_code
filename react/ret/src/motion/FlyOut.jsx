import React, { useState } from "react";

const FlyOut = (props) => {
    const [open, setOpen] = useState(false);


    return <div>
        {
            React.Children.map(props.children, child => React.cloneElement(child, { open, setOpen }))
        }
    </div>;
};

export default FlyOut;
