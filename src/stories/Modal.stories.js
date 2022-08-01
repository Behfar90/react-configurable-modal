import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "../components/Modal";

const stories = storiesOf("Modal test", module);
stories.add("Modal", () => {
  return <Modal />;
});
