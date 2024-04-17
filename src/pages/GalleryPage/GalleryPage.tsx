import { useNavigate } from "react-router";

import { LazyImage } from "../../components/LazyImage/LazyImage";
import { Spinner } from "../../components/Spinner/Spinner";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { useGetPaintingsData } from "./utils/useGetPaintingsData";

import styles from "./GalleryPage.module.scss";

export function GalleryPage() {
  const navigate = useNavigate();

  const goToPaintingDetails = (id: string) => {
    navigate(`/painting/${id}`);
  };

  const paintingsData = useGetPaintingsData();

  if (!paintingsData) {
    return <Spinner />;
  }

  const oilText = (item: string) => item === "oil" && "Olej na płótnie";

  return (
    <>
      <HeaderSection />
      <div className={styles.gallery}>
        {paintingsData.map((painting, index) => (
          <div key={index} className={styles.item} onClick={() => goToPaintingDetails(painting.id)}>
            <LazyImage src={painting.images[0]} />
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
