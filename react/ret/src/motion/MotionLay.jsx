import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpandableCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <motion.div
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer bg-white shadow-xl rounded-2xl p-6"
                style={{
                    width: isOpen ? 400 : 200,
                    height: isOpen ? 300 : 150,
                }}
            // transition={{
            //     layout: { duration: 0.5, type: "spring" },
            // }}
            >
                <motion.h2 layout className="text-lg font-semibold">
                    {isOpen ? "Expanded Card" : "Compact Card"}
                </motion.h2>


                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        exit={{ opacity: 0 }}
                        className="mt-4 text-gray-600"
                    >
                        <p>
                            This content fades in and out while the layout smoothly expands
                            and shrinks. Framer Motion handles all size and position changes
                            automatically with the <code>layout</code> prop.
                        </p>
                    </motion.div>
                )}

            </motion.div>
        </div >
    );
}
