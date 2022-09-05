import React from "react";
import useViewportKeeper from "../hooks/useViewportKeeper";

const Content = ({ passedStyles, children }, ref) => {
  var vpData = useViewportKeeper(ref);
  const newStyles = { ...passedStyles, ...vpData.newPos };

  // const animationClass = ["top", "bottom"].includes(animation)
  //   ? " animate__vertical"
  //   : ["left", "right"].includes(animation)
  //   ? " animate__horizontal"
  //   : ["fade-in", "zoom-in"].includes(animation)
  //   ? ` animate__${animation}`
  //   : "";

  const toggleAnimationInvisible = vpData.done ? "" : " invisible";

  // const positionClass =
  //   position && position !== "top" ? ` position__${position}` : "";

  return (
    <div
      ref={ref}
      className={"modal__content" + toggleAnimationInvisible}
      style={newStyles}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(Content);
