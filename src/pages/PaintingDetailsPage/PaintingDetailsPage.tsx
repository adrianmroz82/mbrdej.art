import { doc, getDoc } from "@firebase/firestore";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { PaintingData } from "../GalleryPage/model/PaintingData";
import { Spinner } from "../../components/Spinner/Spinner";
import { LazyImage } from "../../components/LazyImage/LazyImage";

import CloseIcon from "@mui/icons-material/Close";

import styles from "./PaintingDetailsPage.module.scss";

export function PaintingDetailsPage() {
  const [paintingData, setPaintingData] = useState<PaintingData>();

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function getPaintingData() {
      const docRef = doc(db, "pictures", id!);
      const querySnapshot = await getDoc(docRef);
      setPaintingData(querySnapshot.data() as PaintingData);
    }

    getPaintingData();
  }, []);

  const getImg = (imgSrc: string) => {
    setModel(true);
    setTempImgSrc(imgSrc);
  };

  if (!paintingData) {
    return <Spinner />;
  }

  return (
    <>
      <div className={model ? `${styles.model} ${styles.open}` : styles.model}>
        <img className={styles.modelImg} src={tempImgSrc} alt="" />
        <div onClick={() => setModel(false)} className={styles.closeIcon}>
          <CloseIcon fontSize="large" style={{ color: "white" }} />
        </div>
      </div>
      <div className={styles.container}>
        <h1>Painting Details Page</h1>
        <h2>{id}</h2>
        <h4>{paintingData.name}</h4>
        <h4>{paintingData.dimensions}</h4>
        {paintingData.images.map((image, idx) => (
          <div className={styles.imageContainer} onClick={() => getImg(image)}>
            <LazyImage key={idx} src={image} />
          </div>
        ))}
      </div>
    </>
  );
}
