import { useEffect, useState } from "react";

export default function useCustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("initial");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("initial");

  return { cursorVariant, mousePosition, textEnter, textLeave };
}
