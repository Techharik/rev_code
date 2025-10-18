import React, { useState } from "react";

const Controllform = () => {
    // const [name, setName] = useState('');
    // const [last, setLast] = useState('');
    const [formObj, setFormObj] = useState({
        name: '',
        last: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target)
        const { name, value } = e.target;
        console.log(name, value)
        setFormObj({ ...formObj, [name]: value })
    };

    const onHandleSumit = () => {
        console.log(formObj)
    }

    // Controlled state but not efficent create a objec state;

    // attach a name property and map it in handle function to get a opect values.

    return <div>
        <label htmlFor="name">Name</label>
        <input id="name" name='name' value={formObj.name} onChange={(e) => handleChange(e)}></input>
        <label htmlFor="last">last</label>
        <input id="name" name="last" value={formObj.last} onChange={(e) => handleChange(e)}></input>
        <button onClick={onHandleSumit}>sumbit</button>
    </div>;
};

export default Controllform;
