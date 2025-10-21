import React from "react";

import { motion } from 'motion/react'


const Motion = () => {

    return <div className="flex justify-center align-middle">
        <motion.div
            animate={{ rotate: 360, transition: { duration: 2 } }}

        >The sentance has to be Come smothly</motion.div>
        <h1>Hello</h1>
    </div >;
};

export default Motion;
