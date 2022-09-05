import React, { useEffect } from "react";

const useOutsideCloser = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        (ref.current.contains(event.target) && ref.current !== event.target)
      ) {
        return;
      }
      ref.current.close();
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
};

export default useOutsideCloser;
