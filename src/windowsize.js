import { useState, useEffect } from "react";

const getSize = () => window.innerWidth;

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize);
  const handleResize = () => setWindowSize(getSize());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
