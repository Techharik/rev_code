// // "use client";

// // import { delay, motion, scale } from "framer-motion";
// // const parent = {
// //   hidden: {},
// //   visible: {
// //     transition: {
// //       staggerChildren: 0.3, // 👈 key for sequential animation
// //     },
// //   },
// // };

// // const child = {
// //   hidden: {
// //     opacity: 0,
// //     y: 20,
// //   },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       type: "ease",
// //       stiffness: 100,
// //     },
// //   },
// // };

// // const page = () => {
// //   return (
// //     //  Basic
// //     // <motion.div
// //     //   initial={{ opacity: 0 }}
// //     //   animate={{ opacity: 1 }}
// //     //   transition={{ duration: 1 }}
// //     //   className="w-50 h-50 bg-white"
// //     //   ></motion.div>
// //     // variants
// //     <>
// //       {/* <motion.div
// //         variants={box}
// //         initial="hidden"
// //         animate="visible"
// //         transition={{ duration: 5 }}
// //         className="w-10 h-10 bg-white"
// //       /> */}
// //       <motion.div
// //         variants={parent}
// //         initial="hidden"
// //         animate="visible"
// //         // transition={{ duration: 5 }}
// //         className="w-10 h-10 bg-white"
// //       >
// //         <motion.div variants={child}>Hello</motion.div>
// //         <motion.div variants={child}>Hello</motion.div>
// //         <motion.div variants={child}>Hello</motion.div>
// //         <motion.div variants={child}>Hello</motion.div>
// //       </motion.div>
// //       <motion.button
// //         className="inline-block w-2xs border-while border-2"
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ scale: 0.4 }}
// //         drag
// //       >
// //         click
// //       </motion.button>
// //     </>
// //   );
// // };

// // export default page;
// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function LayoutExample() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="p-10">
//       <motion.div
//         layout
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-500 text-white p-4 cursor-pointer"
//       >
//         <p>Click me</p>
//         <p>Click me</p> <p>Click me</p> <p>Click me</p> <p>Click me</p>{" "}
//         {isOpen && (
//           <>
//             <p>Click me</p> <p>Click me</p>
//             <p>Click me</p> <p>Click me</p>
//           </>
//         )}
//         <p>Click me</p>
//       </motion.div>
//     </div>
//   );
// }

"use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function SharedLayoutExample() {
//   const [selected, setSelected] = useState(false);

//   return (
//     <div className="p-10">
//       {!selected && (
//         <motion.div
//           layoutId="card"
//           onClick={() => setSelected(true)}
//           className="w-40 h-40 bg-green-500 cursor-pointer"
//           whileHover={{
//             width: "50%",
//           }}
//         />
//       )}

//       {selected && (
//         <motion.div
//           layoutId="card"
//           onClick={() => setSelected(false)}
//           className="w-80 h-80 bg-purple-500"
//         />
//       )}
//     </div>
//   );
// }

// import { motion, useAnimation } from "framer-motion";

// export default function ImperativeExample() {
//   const controls = useAnimation();

//   return (
//     <div className="p-10">
//       <button
//         onClick={() => {
//           controls.start({
//             x: 200,
//             transition: { duration: 0.5 },
//           });
//         }}
//       >
//         Move
//       </button>

//       <motion.div animate={controls} className="w-20 h-20 bg-red-500 mt-5" />
//     </div>
//   );
// }

// import { motion, useMotionValue, useTransform } from "framer-motion";

// export default function DerivedExample() {
//   const x = useMotionValue(0);

//   // derived value
//   const rotate = useTransform(x, [0, 300], [0, 360]);

//   return (
//     <div className="p-10">
//       <input
//         type="range"
//         min="0"
//         max="300"
//         onChange={(e) => x.set(Number(e.target.value))}
//       />

//       <motion.div
//         style={{
//           x,
//           rotate, // 👈 derived automatically
//         }}
//         className="w-20 h-20 bg-green-500 mt-5"
//       />
//     </div>
//   );
// }

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollExample() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 2]);

  return (
    <>
      <motion.div style={{ scale }} className="w-20 h-20 bg-purple-500 fixed" />
      <div className="w-[100%] h-[100vh]  bg-red-500"> hsd </div>
      <div className="w-[100%] h-[100vh]  bg-red-500"> hsd </div>
    </>
  );
}
