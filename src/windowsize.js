import { useState, useEffect } from "react";

const getWindowSize = () => {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleResize = () => setWindowSize(getWindowSize());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
