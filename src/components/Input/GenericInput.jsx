import React from "react";
import { InputWrapper, Input, InputLogo } from "./GenericInputStyle";

const GenericInput = ({
  width,
  children,
  pl,
  mt,
  mr,
  mb,
  ml,
  placeholder,
  onChange,
  type,
}) => {
  return (
    <InputWrapper width={width} mt={mt} mr={mr} mb={mb} ml={ml}>
      <InputLogo>{children}</InputLogo>
      <Input
        pl={pl}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default GenericInput;