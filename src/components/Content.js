import React from "react";
import useViewportKeeper from "../hooks/useViewportKeeper";

const Content = ({ animation, position, passedStyles, children }, ref) => {
  var newPosition = useViewportKeeper(ref);
  const newStyles = { ...passedStyles, ...newPosition };

  const animationClass = ["top", "bottom"].includes(animation)
    ? " animate__vertical"
    : ["left", "right"].includes(animation)
    ? " animate__horizontal"
    : ["fade-in", "zoom-in"].includes(animation)
    ? ` animate__${animation}`
    : "";

  const positionClass =
    position && position !== "top" ? ` position__${position}` : "";

  return (
    <div
      ref={ref}
      id="modalContent"
      className={"modal__content" + animationClass + positionClass}
      style={passedStyles} // passedStyles for now until a new solution for the viewportKeeper is found
    >
      {children}
    </div>
  );
};

export default React.forwardRef(Content);
