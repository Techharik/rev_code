import React from "react";

import { motion, useScroll } from 'motion/react'
import Modal from './Modal'
import Transform from "./Transform";

const Motion = () => {
    const { scrollYProgress } = useScroll()

    return <div className="">
        <motion.div style={{
            scaleX: scrollYProgress, position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,

            backgroundColor: "#ff0088",
        }} />
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5, }}

        >The sentance has to be Come smothly</motion.div>
        <h1>Hello</h1>
        <div className="bg-red-400 w-full min-h-screen">

        </div>

        <motion.div whileTap={{ rotate: 10 }} transition={{ duration: 1 }} className="w-10">
            fd
        </motion.div>

        <motion.div whileTap={{ rotate: 10 }} transition={{ duration: 1 }} className="w-10">
            fd
        </motion.div>

        <motion.div whileTap={{ rotate: 10 }} transition={{ duration: 1 }} className="w-10">
            fd
        </motion.div>

        <motion.div whileTap={{ rotate: 10 }} transition={{ duration: 1 }} className="w-10">
            fd
        </motion.div>

        <motion.div whileTap={{ rotate: 10 }} transition={{ duration: 1 }} className="w-10">
            fd
        </motion.div>

        <motion.div whileTap={{ rotate: 10 }} transition={{ duration: 1 }} className="w-10">
            fd
        </motion.div>

        <Modal />
        <Transform />
    </div >;
};

export default Motion;
