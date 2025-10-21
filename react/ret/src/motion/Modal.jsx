import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

function Modal() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        Modal Content
                    </motion.div>
                )}
            </AnimatePresence>
            <button onClick={() => setOpen(!open)}>Click</button>
        </>
    )
}

export default Modal