import styles from "./HeaderSection.module.scss";

export function HeaderSection() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Galeria Obrazów</h1>
      <div className={styles.headerDescription}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repudiandae fugiat corrupti? Numquam impedit
        nisi fugiat quos, sequi iusto vero itaque provident doloribus nesciunt molestias placeat deserunt quasi soluta
        assumenda.
      </div>
    </div>
  );
}
