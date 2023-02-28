import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    setOpen(!open);
  };

  const closeMobileMenu = () => {
    setOpen(false);
    document.body.style.overflow = "visible";
  };

  const renderHamburger = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 40 };

  return (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <div className={styles.menuIcon} onClick={handleClick}>
          <motion.i whileHover={{ scale: 1.3, rotate: 180 }} className={renderHamburger}></motion.i>
        </div>

        <motion.div className={styles.mediaIcons}>
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
      <motion.div className={styles.navbarContainer}>
        {open && (
          <motion.div className={styles.navbarItems}>
            <motion.h2 initial={animateFrom} animate={animateTo} transition={{ delay: 0.2 }}>
              <Link className={styles.navbarItem} onClick={closeMobileMenu} to="/">
                Strona główna
              </Link>
            </motion.h2>
            <motion.h2 initial={animateFrom} animate={animateTo} transition={{ delay: 0.4 }}>
              <Link className={styles.navbarItem} onClick={closeMobileMenu} to="/about">
                O mnie
              </Link>
            </motion.h2>
            <motion.h2 initial={animateFrom} animate={animateTo} transition={{ delay: 0.6 }}>
              <Link className={styles.navbarItem} onClick={closeMobileMenu} to="/contact">
                Kontakt
              </Link>
            </motion.h2>
            <motion.h2 initial={animateFrom} animate={animateTo} transition={{ delay: 0.8 }}>
              <Link className={styles.navbarItem} onClick={closeMobileMenu} to="gallery">
                Galeria
              </Link>
            </motion.h2>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
