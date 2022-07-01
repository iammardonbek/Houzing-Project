import React from "react";
import { Button } from "./buttonStyle";

const Btn = ({
  type,
  className,
  width,
  background,
  children,
  mt,
  mr,
  mb,
  ml,
  onClick,
}) => {
  return (
    <Button
      type={type}
      width={width}
      background={background}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Btn;
