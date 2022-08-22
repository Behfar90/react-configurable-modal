import React, { useState, useEffect } from "react";

const useViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const intersectionHandler = ([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
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

  return isIntersecting;
};

export default useViewport;
