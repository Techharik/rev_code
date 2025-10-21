import React from "react";
import { motion } from 'motion/react'

const Button = ({ primary, label }) => {
    return <motion.button
        className={`
    ${primary ? 'bg-green-800 text-white' : 'bg-amber-300'}  px-2 py-1 
    rounded font-semibold text-sm cursor-pointer`}
        whileTap={{
            scale: 1.1
        }}
        transition={{ duration: 0.2 }}
    >
        {label}</motion.button>;
};

export default Button;
