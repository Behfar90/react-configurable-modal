import React from "react";
import { storiesOf } from "@storybook/react";
import Test from "../components/Test";

const stories = storiesOf("Modal test", module);
stories.add("Test", () => {
  return <Test />;
});
