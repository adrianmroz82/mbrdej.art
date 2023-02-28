import { useState, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { projectStorage } from "../../firebase/config";
import LoadableImage from "../../components/LoadableImage/LoadableImage";

import { ref as dbRef, onValue } from "firebase/database";
import { db } from "./../../firebase/config";

import cx from "classnames";
import styles from "./GalleryPage.module.scss";
// import "./test.css";

interface ImagesInfoArrayI {
  dimensions: string;
  id: string;
  name: string;
  type: string;
  link?: string;
}

const GalleryPage = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const [imagesArray, setImagesArray] = useState<string[]>([]);
  const [imagesInfoArray, setImagesInfoArray] = useState<ImagesInfoArrayI[]>([]);

  const starCountRef = dbRef(db, "imagesInfo/");

  const getImg = (imgSrc: string) => {
    setModel(true);
    setTempImgSrc(imgSrc);
  };

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setImagesInfoArray(data);
    });
  }, []);

  const fetchImages = async () => {
    const imagesListRef = ref(projectStorage, "imagesMin/");
    const listAllRefs = await listAll(imagesListRef);
    const listOfUrls = await Promise.all(listAllRefs.items.map((imageRef) => getDownloadURL(imageRef)));
    return setImagesArray(listOfUrls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const Spinner = () => {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  };

  if (!imagesArray) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  for (let i = 0; i < imagesInfoArray.length; i++) {
    imagesInfoArray[i].link = imagesArray[i];
  }

  const oilText = (item: string | undefined) => item === "oil" && "Olej na płótnie";

  return (
    <>
      <div
        className={cx(styles.model, {
          [styles.modelOpen]: model,
        })}>
        {/* // className={model ? "model open" : "model"}> */}
        <img className={styles.modelImg} src={tempImgSrc} alt="" />
        <div onClick={() => setModel(false)} className={styles.closeIcon}>
          <CloseIcon fontSize="large" style={{ color: "white" }} />
        </div>
      </div>
      <h1 className={styles.portfolio}>Portfolio</h1>
      <div className={styles.gallery}>
        {imagesInfoArray?.map((item, index) => {
          return (
            <div key={index} className={styles.item} onClick={() => getImg(item.link!)}>
              <LoadableImage src={item.link!} />
              <div className={styles.imageInfo}>
                <h4>{item.name}</h4>
                <h4>{item.dimensions}</h4>
                <h4>{oilText(item.type)}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GalleryPage;
