import React from "react";
import StylistContext, { styleObj } from "./StylistContext";

const StylistProvider = ({ config, children }) => (
  <StylistContext.Provider value={{ ...styleObj, ...config }}>
    {children}
  </StylistContext.Provider>
);

export default StylistProvider;
