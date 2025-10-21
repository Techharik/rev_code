import React, { useState } from "react";

const Modal = ({ children }) => {
    const [open, setOpen] = useState(false);
    return <div>
        <div>Modal</div>
        <button onClick={() => setOpen(true)}>Click</button>


        {open && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-800/40">
                {/* Modal content */}
                <div className="bg-red-800 p-6 rounded-xl shadow-lg text-white">
                    <div className="mb-4">show</div>
                    <button
                        onClick={() => setOpen(false)}
                        className="bg-white text-black px-4 py-2 rounded"
                    >
                        Close
                    </button>
                    {/* Optional children */}
                    <div className="mt-4">{children}</div>
                </div>
            </div>
        )}


    </div>;
};

export default Modal;
