import { useNavigate } from "react-router";

import { LazyImage } from "../../components/LazyImage/LazyImage";
import { Spinner } from "../../components/Spinner/Spinner";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { useGetPaintingsData } from "./utils/useGetPaintingsData";

import styles from "./GalleryPage.module.scss";

export function GalleryPage() {
  // const [model, setModel] = useState(false);
  // const [tempImgSrc, setTempImgSrc] = useState("");

  const navigate = useNavigate();

  // const getImg = (imgSrc: string) => {
  //   setModel(true);
  //   setTempImgSrc(imgSrc);
  // };

  const goToPaintingDetails = (id: string) => {
    navigate(`/painting/${id}`);
  };

  const paintingsData = useGetPaintingsData();

  if (!paintingsData) {
    return <Spinner />;
  }

  const oilText = (item: string | undefined) => item === "oil" && "Olej na płótnie";

  return (
    <>
      {/* <div className={model ? `${styles.model} ${styles.open}` : styles.model}>
        <img className={styles.modelImg} src={tempImgSrc} alt="" />
        <div onClick={() => setModel(false)} className={styles.closeIcon}>
          <CloseIcon fontSize="large" style={{ color: "white" }} />
        </div>
      </div> */}
      <HeaderSection />
      <div className={styles.gallery}>
        {paintingsData.map((painting, index) => (
          <div key={index} className={styles.item} onClick={() => goToPaintingDetails(painting.id)}>
            {/* {painting.images.map((image, idx) => (
              <LazyImage key={idx} src={image} onClick={() => getImg(image)} />
            ))} */}
            <LazyImage key={index} src={painting.images[0]} />
            <div className={styles.imageInfo}>
              <h4>{painting.name}</h4>
              <h4>{painting.dimensions}</h4>
              <h4>{oilText(painting.type)}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
