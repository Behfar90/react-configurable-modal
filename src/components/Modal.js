import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useOutsideCloser from "../hooks/useOutsideCloser";
import "../styles.css";

const Modal = ({ show, setShow, children, width, height, animation }) => {
  const modalRef = useRef();
  const modalCloser = () => setShow(false);

  useOutsideCloser(modalRef, modalCloser);

  const passedStyles = {
    width: width || null,
    height: height || null,
  };

  return (
    <div ref={modalRef} className={"modal" + (show ? " modal__show" : "")}>
      <div
        className={
          "modal__content" + (animation ? ` animate__${animation}` : "")
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
  animation: PropTypes.string,
};

export default Modal;
