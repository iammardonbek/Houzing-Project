import React from "react";
import { forwardRef } from "react";
import { InputWrapper } from "./InputWithLabelStyle";

const InputWithLabel = forwardRef(
  (
    {
      id,
      defaultValue,
      type,
      onChange,
      autoFocus,
      children,
      name,
      placeholder,
    },
    ref
  ) => {
    return (
      <InputWrapper className="searchformfld">
        <input
          name={name}
          placeholder={placeholder}
          id={id}
          type={type}
          defaultValue={defaultValue}
          onChange={onChange}
          autoFocus={autoFocus}
          ref={ref}
        />
        <label htmlFor={id}>{children}</label>
      </InputWrapper>
    );
  }
);

export default InputWithLabel;
