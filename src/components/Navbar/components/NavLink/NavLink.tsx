import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./NavLink.module.scss";

interface Props {
  route: string;
  name: string;
}

const NavLink = ({ route, name }: Props) => {
  return (
    <motion.h4 whileHover={{ scale: 1.1 }}>
      <Link className={styles.navLink} to={route}>
        {name}
      </Link>
    </motion.h4>
  );
};

export default NavLink;
