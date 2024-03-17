import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import landing from "./../../assets/images/landing.jpeg";

import styles from "./HomePage.module.scss";

export function HomePage() {
  return (
    <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={styles.homeContainer} style={{ backgroundImage: `url(${landing})` }}>
        <div className={styles.buttonContainer}>
          <Link to="/about">enter</Link>
        </div>
      </div>
    </motion.div>
  );
}
