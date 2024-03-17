import cn from "classnames";

import { useLazyImage } from "./utils/useLazyImage";

import styles from "./LazyImage.module.scss";

export interface Props {
  src: string;
  alt?: string;
}

export function LazyImage({ src, alt = "Painting" }: Props) {
  const [isVisible, isLoaded, containerRef, imageRef] = useLazyImage();

  return (
    <div
      ref={containerRef}
      className={cn(styles.container, {
        [styles.containerLoaded]: isLoaded,
      })}
    >
      {(isVisible || isLoaded) && (
        <img
          ref={imageRef}
          className={cn(styles.image, {
            [styles.imageLoaded]: isLoaded,
          })}
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
}
