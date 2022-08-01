import React, { useState } from "react";
import Modal from "./Modal";

const Test = () => {
  const [modalShow, modalSetShow] = useState(false);

  return (
    <div>
      <Modal show={modalShow} setShow={modalSetShow} />
      <button onClick={() => modalSetShow(!modalShow)}>Click</button>
    </div>
  );
};

export default Test;
