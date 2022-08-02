import React, { useRef } from "react";
import PropTypes from "prop-types";
/* Hooks */
import useOutsideCloser from "../hooks/useOutsideCloser";
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
          (animation
            ? position === "target"
              ? " animate__fade-in"
              : ` animate__${animation}`
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
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  viewportChecker: PropTypes.bool,
};

export default Modal;
