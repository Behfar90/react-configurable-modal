import React, { useRef } from "react";
import PropTypes from "prop-types";
/* Components */
import Content from "./Content";
/* Hooks */
import useOutsideCloser from "../hooks/useOutsideCloser";
import useEscPress from "../hooks/useEscPress";
// import useViewport from "../hooks/useViewport";
/* Helpers */
import setStyleProperty from "../helpers/setStyleProperty";
/* Styles */
import "../styles.css";

const Modal = ({
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
  useEscPress(modalCloser);

  if (animation) {
    setStyleProperty(animation);
  }

  var passedStyles = {
    width: width || null,
    height: height || null,
    top: coords?.top && position === "target" ? coords?.top : null,
    left: coords?.left && position === "target" ? coords?.left : null,
  };

  return (
    <div
      ref={modalRef}
      className={
        "modal" +
        (position && position !== "top" ? ` modal__position-${position}` : "")
      }
    >
      <Content
        ref={contentRef}
        animation={animation}
        position={position}
        passedStyles={passedStyles}
        children={children}
      />
    </div>
  );
};

Modal.propTypes = {
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
