import { useState, useEffect, useRef } from "react";
import cn from "classnames";

import useOnScreen from "../../utils/useOnScreen";

import styles from "./LoadableImage.module.scss";

export interface Props {
  src: string;
  alt?: string;
}

export function LoadableImage({ src, alt = "" }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(containerRef);

  // TODO: rename component to more descriptive name, extract hook

  useEffect(() => {
    if (!isVisible || isLoaded) {
      return;
    }

    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [isVisible, isLoaded]);

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
