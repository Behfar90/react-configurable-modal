import React, { useEffect } from "react";

const useEscPress = (handler) => {
  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === "Escape") {
        handler();
      }
    };
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);
};

export default useEscPress;
