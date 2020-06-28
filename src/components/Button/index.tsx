import React, { useContext } from "react";
import Button from "./Button";
import StylistContext from "../Stylist/StylistContext";

const StyledButton = ({ onClick, children }) => {
  const { btn } = useContext(StylistContext);

  return (
    <Button style={btn} onClick={onClick}>
      {children}
    </Button>
  );
};

export default StyledButton;
