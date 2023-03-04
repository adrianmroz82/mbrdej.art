import styles from "./OrdersPage.module.scss";
import forest_orders from "./../../assets/images/forest_orders.jpg";

const OrdersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={forest_orders} alt="image" />
      </div>
      <div className={styles.rightContainer}>
        <h1>Zamówienie indywidualne</h1>
        <p>
          Chciałbyś mieć obraz o konkretnej tematyce, kolorach czy rozmiarze, według swojego upodobania? A może marzy ci
          się uwiecznienie konkretnego kadru na płótnie? Chętnie stworzę obraz dla Ciebie, namalowany specjalnie do
          Twojego wnętrza. Zapraszam do kontaktu. Razem stworzymy coś niepowtarzalnego.
        </p>
      </div>
    </div>
  );
};

export default OrdersPage;
