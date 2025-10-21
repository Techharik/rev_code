// src/components/AnimatedBox.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedBox = ({ label }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-500 text-white p-6 rounded cursor-pointer"
            style={{
                width: isOpen ? 300 : 150,
                height: isOpen ? 150 : 100,
            }}
            transition={{ layout: { duration: 0.5, type: 'spring' } }}
        >
            {label}
            {isOpen && <div className="mt-2 text-sm">Hello! I expand.</div>}
        </motion.div>
    );
};
