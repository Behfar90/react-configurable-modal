import React, { useState } from "react";
import Modal from "./Modal";

const Test = () => {
  const [modalShow, modalSetShow] = useState(false);
  const [coords, setCoords] = useState({});

  const handleClick = (e) => {
    modalSetShow(!modalShow);
    setCoords({ top: e.clientY, left: e.clientX });
  };

  return (
    <div>
      {modalShow && (
        <Modal
          setShow={modalSetShow}
          width={"50%"}
          height={"550px"}
          animation={"right"}
          position={"target"}
          coords={coords}
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
      )}
      <button onClick={handleClick}>Click</button>
      <button style={{ float: "right" }} onClick={handleClick}>
        Click 2
      </button>
      <button style={{ marginLeft: "400px" }} onClick={handleClick}>
        Click 3
      </button>
    </div>
  );
};

export default Test;
