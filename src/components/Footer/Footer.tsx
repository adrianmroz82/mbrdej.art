import { motion } from "framer-motion";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerInfo}>
        <motion.div className={classes.mediaIcons}>
          <a href="https://www.facebook.com/mbrdej.art" target="_blank" rel="noreferrer">
            <motion.i
              whileHover={{ scale: 1.3 }}
              style={{ marginRight: "20px", textDecoration: "none", color: "black" }}
              className="fa-brands fa-facebook"></motion.i>
          </a>
          <a href="https://www.instagram.com/mbrdej.art" target="_blank" rel="noreferrer">
            <motion.i
              whileHover={{ scale: 1.3 }}
              style={{ marginRight: "20px", textDecoration: "none", color: "black" }}
              className="fa-brands fa-instagram"></motion.i>
          </a>
          <a href="https://www.etsy.com/pl/shop/mbrdejart?ref=seller-platform-mcnav" target="_blank" rel="noreferrer">
            <motion.i
              whileHover={{ scale: 1.3 }}
              style={{ marginRight: "20px", textDecoration: "none", color: "black" }}
              className="fa-brands fa-etsy"></motion.i>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
