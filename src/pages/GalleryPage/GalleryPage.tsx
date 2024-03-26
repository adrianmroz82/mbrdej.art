import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { getDownloadURL, listAll, ref } from "firebase/storage";
import { projectStorage } from "../../firebase/config";
import { LazyImage } from "../../components/LazyImage/LazyImage";
import { ref as dbRef, onValue } from "firebase/database";
import { db } from "../../firebase/config";
import { Spinner } from "../../components/Spinner/Spinner";

import styles from "./GalleryPage.module.scss";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { collection, getDocs } from "firebase/firestore";
interface ImageInfo {
  dimensions: string;
  // id: string;
  name: string;
  type: string;
  // link?: string;
  images: string[];
}

export function GalleryPage() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const [imagesArray, setImagesArray] = useState<string[]>([]);
  const [imagesInfoArray, setImagesInfoArray] = useState<ImageInfo[]>([]);
  const [data, setData] = useState<ImageInfo[]>([]);

  const getImg = (imgSrc: string) => {
    setModel(true);
    setTempImgSrc(imgSrc);
  };

  useEffect(() => {
    async function getImages() {
      const querySnapshot = await getDocs(collection(db, "pictures"));
      const imageData: ImageInfo[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as ImageInfo;
        imageData.push(data);
      });
      setData(imageData);
    }
    getImages();
  }, []);
  console.log(data);

  if (!data) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  // for (let i = 0; i < imagesInfoArray.length; i++) {
  //   imagesInfoArray[i].link = imagesArray[i];
  // }

  const oilText = (item: string | undefined) => item === "oil" && "Olej na płótnie";

  return (
    <>
      <div className={model ? `${styles.model} ${styles.open}` : styles.model}>
        <img className={styles.modelImg} src={tempImgSrc} alt="" />
        <div onClick={() => setModel(false)} className={styles.closeIcon}>
          <CloseIcon fontSize="large" style={{ color: "white" }} />
        </div>
      </div>
      <HeaderSection />
      <div className={styles.gallery}>
        {data.map((item, index) => (
          <div key={index} className={styles.item}>
            {item.images.map((image, idx) => (
              <LazyImage key={idx} src={image} onClick={() => getImg(image)} />
            ))}
            <div className={styles.imageInfo}>
              <h4>{item.name}</h4>
              <h4>{item.dimensions}</h4>
              <h4>{oilText(item.type)}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// <>
// {item.images?.map((img: string, index: number) => {
//   console.log(img);

//   <LazyImage key={index} src={img} />;
// })}
// </>
