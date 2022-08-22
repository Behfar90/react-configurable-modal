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
          width={"300px"}
          height={"350px"}
          animation={"top"}
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
      <button onClick={handleClick} style={{ position: "absolute", top: "0" }}>
        Click
      </button>
      <button
        onClick={handleClick}
        style={{ position: "absolute", bottom: "400px" }}
      >
        Click2
      </button>
      <button style={{ float: "right" }} onClick={handleClick}>
        Click 3
      </button>
      <button
        style={{ marginLeft: "400px", marginTop: "800px" }}
        onClick={handleClick}
      >
        Click 4
      </button>
    </div>
  );
};

export default Test;
