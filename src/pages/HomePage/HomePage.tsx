//@ts-nocheck

import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { Button } from "../../components";
import { motion } from "framer-motion";
import { useState } from "react";

const HomePage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    // setTimeout(() => {
    setCursorPosition({ x: clientX, y: clientY });
    // }, 25);
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    hovered: {
      scale: 1.5,
      opacity: 0.5,
    },
  };

  const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 0.3,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const handleButtonHover = () => {
    setIsButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  console.log(isButtonHovered);

  const renderCursor = () => {
    return (
      <motion.div
        style={{
          width: isButtonHovered ? "20px" : "10px",
          height: isButtonHovered ? "20px" : "10px",
          borderRadius: "50%",
          backgroundColor: isButtonHovered ? "white" : "white",
          position: "fixed",
          top: cursorPosition.y - 7,
          // top: isButtonHovered ? cursorPosition.y - 15 : cursorPosition.y - 7,
          left: cursorPosition.x - 7,
          // left: isButtonHovered ? cursorPosition.x - 15 : cursorPosition.x - 7,
          zIndex: 9999,
        }}
        animate={
          {
            // scale: [1, 1.5, 1],
            // opacity: [0.5, 0.3, 0.5],
          }
        }
        transition={
          {
            // duration: 0.5,
            // repeat: Infinity,
            // ease: "easeInOut",
          }
        }
      />
    );
  };

  return (
    <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div
        className={styles.homeContainer}
        style={{
          backgroundColor: "black",
          cursor: "none",
        }}
      >
        {renderCursor()}
        <div className={styles.buttonContainer}>
          <Link to="/about">
            <div style={{ backgroundColor: "red" }}>
              <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" onClick={handleButtonClick}>
                Discover
              </Button>
            </div>
          </Link>
        </div>
      </div>
      {isButtonClicked && <BigCircle />}
    </motion.div>
  );
};

export default HomePage;

const BigCircle = ({ onAnimationComplete }) => {
  return (
    <motion.div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "black",
        position: "fixed",
        top: "50%",
        left: "50%",
        zIndex: 9999,
      }}
      animate={{
        width: "100vh",
        height: "100vh",
        backgroundColor: "white",
        // boxShadow: "0 0 0 1000px black",
        // top: 0,
        // left: 0,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      onAnimationComplete={onAnimationComplete}
    />
  );
};
