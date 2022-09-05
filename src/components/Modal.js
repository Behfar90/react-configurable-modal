import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
/* Components */
import Content from "./Content";
/* Hooks */
import useOutsideCloser from "../hooks/useOutsideCloser";
// import useEscPress from "../hooks/useEscPress";
import useViewportKeeper from "../hooks/useViewportKeeper";
/* Helpers */
import setStyleProperty from "../helpers/setStyleProperty";
/* Styles */
import "../styles.css";

const Modal = ({
  show,
  setShow,
  children,
  width,
  height,
  animation,
  position,
  coords,
}) => {
  const modalRef = useRef();
  const contentRef = useRef();
  const modalCloser = () => setShow(false);

  useOutsideCloser(modalRef, modalCloser);
  // useEscPress(modalCloser);

  if (animation) {
    setStyleProperty(animation);
  }

  var passedStyles = {
    width: width || null,
    height: height || null,
    ...(coords?.top && position === "target" && { top: coords.top }),
    ...(coords?.left && position === "target" && { left: coords.left }),
    ...(position === "target" && { right: "auto" }),
    ...(position === "target" && { bottom: "auto" }),
  };

  var vpData = useViewportKeeper(modalRef);
  const newStyles = { ...passedStyles, ...vpData.newPos };

  useEffect(() => {
    if (show) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
      modalCloser();
    }
  }, [show]);

  const animationClass = ["top", "bottom"].includes(animation)
    ? " animate__vertical"
    : ["left", "right"].includes(animation)
    ? " animate__horizontal"
    : ["fade-in", "zoom-in"].includes(animation)
    ? ` animate__${animation}`
    : "";

  const positionClass =
    position && position !== "center" ? ` modal__position-${position}` : "";

  return (
    <dialog
      ref={modalRef}
      className={"modal" + positionClass + animationClass}
      style={newStyles}
    >
      {/* <Content
        ref={contentRef}
        passedStyles={passedStyles}
        children={children}
      /> */}
      {children}
    </dialog>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  animation: PropTypes.oneOf([
    "",
    "top",
    "bottom",
    "left",
    "right",
    "fade-in",
    "zoom-in",
  ]),
  position: PropTypes.oneOf(["", "top", "bottom", "center", "target"]),
  coords: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  viewportChecker: PropTypes.bool,
};

export default Modal;
