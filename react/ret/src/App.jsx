import React from "react";

import { NavLink, useLocation } from 'react-router';


const App = () => {
    const location = useLocation()
    console.log(location)
    return <nav>
        <NavLink to="/test" className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
        }>Home </NavLink>
        <NavLink to="/context">About </NavLink>
        <NavLink to="/"> Contact us</NavLink>
    </nav>

};

export default App;
