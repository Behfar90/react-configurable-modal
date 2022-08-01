import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useOutsideCloser from "../hooks/useOutsideCloser";
import "../styles.css";

const Modal = ({ show, setShow }) => {
  const modalRef = useRef();
  const modalCloser = () => setShow(false);

  useOutsideCloser(modalRef, modalCloser);

  return (
    <div ref={modalRef} className={"modal" + (show ? " modal__show" : "")}>
      <div className="modal__content">
        <div className="modal__header">
          <span onClick={modalCloser} className="modal__close">
            &times;
          </span>
          <h2>Modal Header</h2>
        </div>
        <div className="modal__body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div className="modal__footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default Modal;
