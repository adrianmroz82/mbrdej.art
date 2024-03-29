import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { isMobile } from "../../utils/utils";
import logo from "./../../assets/images/logo.png";
import { header, stagger } from "../../animations/animations";
import { MobileLink } from "./components/MobileLink/MobileLink";
import { NavButton } from "./components/NavButton/NavButton";

import styles from "./Navbar.module.scss";

export function Navbar() {
  // TODO: extract logic to a custom hook
  
  const [isOpened, setIsOpened] = useState(false);
  const [mobile, setIsMobile] = useState(false);

  const handleClick = () => {
    if (isOpened) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsOpened(!isOpened);
  };

  const showButton = () => {
    if (isMobile()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const renderHamburger = isOpened ? "fa-solid fa-xmark" : "fa-solid fa-bars";

  const mobileMenu = (
    <motion.div className={styles.navbarContainer}>
      {isOpened && (
        <motion.div className={styles.navbarItems}>
          <MobileLink route="/" name="O MNIE" delay={0.2} />
          <MobileLink route="/gallery" name="Galeria" delay={0.4} />
          <MobileLink route="/" name="Zamówienia" delay={0.6} />
          <MobileLink route="/" name="Kontakt" delay={0.8} />
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <motion.div initial="initial" animate="animate" className={styles.container} variants={stagger}>
      <div className={styles.iconsContainer}>
        <motion.div className={styles.logoIcon} variants={header}>
          <Link to="/about">
            <motion.img variants={stagger} src={logo} alt="" width={"100%"} height="100vh" />
          </Link>
        </motion.div>
        {mobile ? (
          <div className={styles.menuIcon} onClick={handleClick}>
            <motion.i whileHover={{ scale: 1.3, rotate: 180 }} className={renderHamburger}></motion.i>
          </div>
        ) : (
          <div className={styles.navlinkContainer}>
            <div style={{ display: "flex" }}>
              <NavButton route="/about" name="O mnie" />
              <NavButton route="/gallery" name="Galeria" />
              <NavButton route="/orders" name="Zamówienia" />
              <NavButton route="/contact" name="Kontakt" />
            </div>
          </div>
        )}
      </div>
      {mobile && mobileMenu}
    </motion.div>
  );
}
