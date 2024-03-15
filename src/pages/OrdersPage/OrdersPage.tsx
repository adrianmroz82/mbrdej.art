import { motion } from "framer-motion";

import forest_orders from "./../../assets/images/forest_orders.jpg";
import { stagger, star } from "../../animations/animations";

import styles from "./OrdersPage.module.scss";

export function OrdersPage() {
  return (
    <motion.div initial="initial" animate="animate" variants={stagger} className={styles.container}>
      <motion.div variants={star} className={styles.leftContainer}>
        <img src={forest_orders} alt="image" />
      </motion.div>
      <motion.div className={styles.rightContainer}>
        <motion.h1 variants={star}>Zamówienie indywidualne</motion.h1>
        <motion.p variants={star}>
          Chciałbyś mieć obraz o konkretnej tematyce, kolorach czy rozmiarze, według swojego upodobania? A może marzy ci
          się uwiecznienie konkretnego kadru na płótnie? Chętnie stworzę obraz dla Ciebie, namalowany specjalnie do
          Twojego wnętrza. Zapraszam do kontaktu. Razem stworzymy coś niepowtarzalnego.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
