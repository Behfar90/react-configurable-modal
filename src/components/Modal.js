import React, { useRef } from "react";
import PropTypes from "prop-types";
import useOutsideCloser from "../hooks/useOutsideCloser";
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
  const modalCloser = () => setShow(false);

  useOutsideCloser(modalRef, modalCloser);

  const passedStyles = {
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
        (show ? " modal__show" : "") +
        (position && position !== "top" ? ` modal__position-${position}` : "")
      }
    >
      <div
        className={
          "modal__content" +
          (animation ? ` animate__${animation}` : "") +
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
  show: PropTypes.bool.isRequired,
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
};

export default Modal;
