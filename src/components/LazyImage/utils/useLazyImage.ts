import { useState, useEffect, useRef, RefObject } from "react";

import { useOnScreen } from "../../../utils/useOnScreen";

export function useLazyImage(): [boolean, boolean, RefObject<HTMLDivElement>, RefObject<HTMLImageElement>] {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(containerRef);

  useEffect(() => {
    if (!isVisible || isLoaded) {
      return;
    }

    const handleImageLoad = () => {
      setIsLoaded(true);
    };

    if (imageRef.current) {
      imageRef.current.onload = handleImageLoad;
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.onload = null;
      }
    };
  }, [isVisible, isLoaded]);

  return [isVisible, isLoaded, containerRef, imageRef];
}
