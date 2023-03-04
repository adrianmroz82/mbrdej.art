import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "./MobileLink.module.scss";

interface Props {
  route: string;
  name: string;
  delay: number;
}

const MobileLink = ({ route, name, delay }: Props) => {
  const closeMobileMenu = () => {
    // setOpen(false);
    document.body.style.overflow = "visible";
    // setActive(true);
  };

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 40 };

  return (
    <>
      <motion.h2 initial={animateFrom} animate={animateTo} transition={{ delay }}>
        <NavLink className={styles.navbarItem} onClick={closeMobileMenu} to={route}>
          {name}
        </NavLink>
      </motion.h2>
    </>
  );
};

export default MobileLink;
