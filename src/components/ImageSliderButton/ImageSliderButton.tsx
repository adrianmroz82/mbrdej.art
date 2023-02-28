//todo: is it necessary?
import "./ImageSliderButton.css";

interface ImageSliderButtonProps {
  direction: string;
  moveSlide: () => void;
}

const ImageSliderButton = ({ direction, moveSlide }: ImageSliderButtonProps) => {
  return (
    <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
      {direction === "next" ? (
        <i className="fa-lg fa-solid fa-arrow-right-long" />
      ) : (
        <i className="fa-lg fa-solid fa-arrow-left-long" />
      )}
    </button>
  );
};

export default ImageSliderButton;
