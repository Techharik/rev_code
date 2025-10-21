import React from "react";
import { motion, useMotionValue, useTransform } from 'motion/react'
const Transform = () => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [0, 500], [0, 360])
    return <div>
        <motion.div className="w-10 h-10 bg-green-500" style={{ x, rotate: rotate }} drag='x'>

        </motion.div>

        <motion.div layout drag whileTap={{ scale: 1.1 }}>
            Move Me
        </motion.div>
    </div>;
};

export default Transform;
