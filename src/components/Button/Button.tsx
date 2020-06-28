import React from "react";

interface Props {
  onClick: () => {};
  style: {};
}

const Button: React.FC<Props> = ({ onClick, style, children }) => {
  return <button style={style}>{children}</button>;
};

export default Button;
