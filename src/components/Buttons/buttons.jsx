import React from "react";
import { Button } from "./buttonStyle";

const Btn = ({ type, width, background, children, mt, mr, mb, ml }) => {
  return (
    <Button
      type={type}
      width={width}
      background={background}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      {children}
    </Button>
  );
};

export default Btn;
