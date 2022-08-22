import React, { useState, useEffect } from "react";
import positionHandler from "../helpers/positionHandler";

const useViewportKeeper = (ref) => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    const intersectionHandler = ([entry]) => {
      if (!entry.isIntersecting) {
        const newPosition = positionHandler(ref);
        setPosition(newPosition);
      }
    };
    const observer = new IntersectionObserver(intersectionHandler, {
      threshold: 1.0,
    });
    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return position;
};

export default useViewportKeeper;
