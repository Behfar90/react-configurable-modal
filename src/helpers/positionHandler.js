import React from "react";

const positionHandler = (ref) => {
  if (!ref.current) return {};
  var res = {};
  const rect = ref.current.getBoundingClientRect();
  if (
    rect.right >
    Math.min(window.innerWidth, document.documentElement.clientWidth)
  ) {
    res.left = rect.x - ref.current.offsetWidth;
  }
  if (
    rect.bottom >
    Math.min(window.innerHeight, document.documentElement.clientHeight)
  ) {
    res.top = rect.y - ref.current.offsetHeight;
  }
  return res;
};

export default positionHandler;
