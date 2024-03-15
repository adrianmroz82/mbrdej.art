import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { header } from "../../../../animations/animations";

import styles from "./NavButton.module.scss";

interface Props {
  route: string;
  name: string;
}

export function NavButton({ route, name }: Props) {
  return (
    <>
      <motion.h4 variants={header} whileHover={{ scale: 1.1 }}>
        <Link className={styles.navLink} to={route}>
          {name}
        </Link>
      </motion.h4>
    </>
  );
}
