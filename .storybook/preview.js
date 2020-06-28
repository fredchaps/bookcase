import React from "react";
import { addDecorator } from "@storybook/react";
import StylistProvider from "../src/components/Stylist/StylistProvider";

const theme = {
  btn: {
    borderStyle: "dashed",
  },
};

addDecorator((storyFn) => (
  <StylistProvider config={theme}>{storyFn()}</StylistProvider>
));
