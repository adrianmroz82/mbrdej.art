import { Link } from "react-router-dom";
// import { Button } from "../../components";
import styles from "./HomePage.module.scss";
import landing from "./../../assets/images/landing.jpg";
import { Button } from "../../components";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={styles.homeContainer} style={{ backgroundImage: `url(${landing})` }}>
        <div className={styles.buttonContainer}>
          <Link to="/about">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
              Button two
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
