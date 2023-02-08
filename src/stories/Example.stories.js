import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../examples/Example";

const stories = storiesOf("Modal example", module);
stories.add("Example", () => {
  return <Example />;
});
