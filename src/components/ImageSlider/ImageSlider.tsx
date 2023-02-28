//todo: is it necessary?
import { useState } from "react";
import ImageSliderButton from "../ImageSliderButton";
import "./ImageSlider.css";

interface Props {
  images: string[];
}
const ImageSlider = ({ images }: Props) => {
  const [currImgIndex, setCurrImgIndex] = useState(0);

  const nextSlide = () => {
    currImgIndex < images.length - 1 && setCurrImgIndex(currImgIndex + 1);
    currImgIndex === images.length - 1 && setCurrImgIndex(0);
  };

  const prevSlide = () => {
    currImgIndex > 0 && setCurrImgIndex(currImgIndex - 1);
    currImgIndex <= 0 && setCurrImgIndex(images.length - 1);
  };

  const moveThumbnails = (index: number) => {
    setCurrImgIndex(index);
  };

  const thumbnails = images.map((image, index) => {
    return (
      <img
        key={index}
        className={currImgIndex === index ? "thumbnail active" : "thumbnail"}
        src={image}
        alt="Product"
        style={{
          height: 60,
          width: 60,
        }}
        onClick={() => moveThumbnails(index)}
      />
    );
  });

  return (
    <>
      <div className="container-slider">
        {images.map((image, index) => {
          return (
            <div key={index} className={currImgIndex === index ? "slide active-anim" : "slide"}>
              <img src={image} alt="Thumbnail" />
            </div>
          );
        })}
        <ImageSliderButton moveSlide={nextSlide} direction={"next"} />
        <ImageSliderButton moveSlide={prevSlide} direction={"prev"} />
        <div className="container-thumbnails">
          {Array.from({ length: images.length }).map((_item, index) => (
            <div key={index} onClick={() => moveThumbnails(index)}></div>
          ))}
          {thumbnails}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
