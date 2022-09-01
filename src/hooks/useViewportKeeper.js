import React, { useState, useEffect } from "react";
import positionHandler from "../helpers/positionHandler";

const useViewportKeeper = (ref) => {
  const [position, setPosition] = useState({
    done: false,
    newPos: {},
  });

  useEffect(() => {
    const intersectionHandler = ([entry]) => {
      if (position.done) return;

      if (!entry.isIntersecting) {
        const newPosition = positionHandler(ref);
        setPosition({ done: true, newPos: newPosition });
      } else {
        setPosition({ ...position, done: true });
      }
    };
    const observer = new IntersectionObserver(intersectionHandler, {
      threshold: 1.0,
    });
    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, position]);

  return position;
};

export default useViewportKeeper;
