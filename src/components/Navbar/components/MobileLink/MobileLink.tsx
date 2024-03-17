import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "./MobileLink.module.scss";

interface Props {
  route: string;
  name: string;
  delay: number;
}

export function MobileLink({ route, name, delay }: Props) {
  const closeMobileMenu = () => {
    document.body.style.overflow = "visible";
  };

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 40 };

  return (
    <motion.h2 initial={animateFrom} animate={animateTo} transition={{ delay }}>
      <NavLink className={styles.navbarItem} onClick={closeMobileMenu} to={route}>
        {name}
      </NavLink>
    </motion.h2>
  );
}
