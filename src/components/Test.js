import React, { useState } from "react";
import Modal from "./Modal";

const Test = () => {
  const [modalShow, modalSetShow] = useState(false);

  return (
    <div>
      <Modal
        show={modalShow}
        setShow={modalSetShow}
        width={"50%"}
        height={"550px"}
      >
        <div className="modal__header">
          <span
            onClick={() => modalSetShow(!modalShow)}
            className="modal__close"
          >
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
      </Modal>
      <button onClick={() => modalSetShow(!modalShow)}>Click</button>
    </div>
  );
};

export default Test;
