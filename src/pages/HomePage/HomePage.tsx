import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import landing from "./../../assets/images/landing.jpeg";
import { Button } from "../../components";
import { motion } from "framer-motion";
import { useState } from "react";

const HomePage = () => {
  const [brushSize, setBrushSize] = useState(200);
  const [positions, setPositions] = useState<any[]>([]);
  const [clipPath, setClipPath] = useState(`circle(100px at 0px 0px)`);

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    const newClipPath = `circle(${brushSize}px at ${clientX}px ${clientY}px)`;
    setClipPath(newClipPath);
    setPositions([...positions, { x: clientX, y: clientY }]);
  };

  const alreadyHoveredClipPath = positions.map(({ x, y }) => `circle(${brushSize}px at ${x}px ${y}px)`).join(", ");

  const animationVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };
  return (
    <motion.div
      variants={animationVariant}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className={styles.homeContainer}
        onMouseMove={handleMouseMove}
        style={{
          backgroundImage: `url(${landing})`,
          clipPath: `${clipPath}, ${alreadyHoveredClipPath}`,
        }}>
        <div className={styles.buttonContainer}>
          <Link to="/about">
            <motion.div initial="initial" animate="animate" variants={animationVariant}>
              <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                Discover
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;

// const HomePage = () => {
//   const [brushSize, setBrushSize] = useState(100);
//   const [clipPath, setClipPath] = useState(`circle(100px at 0px 0px)`);

//   const handleMouseMove = (event: any) => {
//     const { clientX, clientY } = event;
//     const newClipPath = `circle(${brushSize}px at ${clientX}px ${clientY}px)`;
//     setClipPath(newClipPath);
//   };

//   return (
//     <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//       <div
//         className={styles.homeContainer}
//         onMouseMove={handleMouseMove}
//         style={{
//           backgroundImage: `url(${landing})`,
//           clipPath,
//         }}>
//         <div className={styles.buttonContainer}>
//           <Link to="/about">
//             <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
//               Button two
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HomePage;
