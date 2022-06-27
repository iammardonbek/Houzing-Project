import React from "react";
import { InputWrapper, Input, InputLogo } from "./GenericInputStyle";

const GenericInput = ({
  name,
  width,
  children,
  defaultValue,
  pl,
  mt,
  mr,
  mb,
  ml,
  placeholder,
  onChange,
  type,
  bt,
  bl,
  br,
  ref,
}) => {
  return (
    <InputWrapper
      width={width}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      bt={bt}
      bl={bl}
      br={br}
      ref={ref}
    >
      <InputLogo>{children}</InputLogo>
      <Input
        defaultValue={defaultValue}
        pl={pl}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </InputWrapper>
  );
};

export default GenericInput;
