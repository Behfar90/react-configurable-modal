import React, { useRef } from "react";
import PropTypes from "prop-types";
/* Hooks */
import useOutsideCloser from "../hooks/useOutsideCloser";
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
      <div
        ref={contentRef}
        className={
          "modal__content" +
          (["top", "bottom"].includes(animation) ? ` animate__vertical` : "") +
          (["left", "right"].includes(animation)
            ? ` animate__horizontal`
            : "") +
          (position && position !== "top" ? ` position__${position}` : "")
        }
        style={passedStyles}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  setShow: PropTypes.func.isRequired,
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  animation: PropTypes.oneOf([
    "top",
    "bottom",
    "left",
    "right",
    "fade-in",
    "zoom-in",
  ]),
  position: PropTypes.oneOf(["top", "bottom", "center", "target"]),
  coords: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  viewportChecker: PropTypes.bool,
};

export default Modal;
