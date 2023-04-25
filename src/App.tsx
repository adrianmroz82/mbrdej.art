import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./pages/AnimatedRoutes";
import styles from "./App.module.scss";
// import "./custom-cursor.css";
import { motion } from "framer-motion";
import useCustomCursor from "./utils/useCustomCursor";

function App() {
  const { cursorVariant, mousePosition, textEnter, textLeave } = useCustomCursor();

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [cursorVariant, setCursorVariant] = useState("initial");

  // useEffect(() => {
  //   const mouseMove = (e: any) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  const cursorVariants = {
    initial: {
      // x: mousePosition.x - 16,
      x: mousePosition.x - 10,
      // y: mousePosition.y - 16,
      y: mousePosition.y - 10,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
      pointerEvents: "none",
    },
  };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("initial");

  // console.log(cursorVariant);

  // console.log(mousePosition);

  return (
    <div className={styles.container}>
      <Router>
        <AnimatedRoutes />
      </Router>
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Hello
      </h1>
      <motion.div className={styles.cursor} variants={cursorVariants} animate={cursorVariant} />
    </div>
  );
}

export default App;
