import { createContext } from "react";

export const styleObj = {
  btn: {
    borderStyle: "solid",
    borderRadius: "2px",
    borderColor: "light-gray",
    backgroundColor: "white",
  },
};

const StylistContext = createContext(styleObj);

export default StylistContext;
