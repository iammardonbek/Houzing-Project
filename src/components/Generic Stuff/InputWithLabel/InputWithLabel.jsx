import React from "react";
import { forwardRef } from "react";
import { InputWrapper } from "./InputWithLabelStyle";

const InputWithLabel = forwardRef(
  (
    { id, value, type, onChange, autoFocus, children, name, placeholder },
    ref
  ) => {
    return (
      <InputWrapper className="searchformfld">
        <input
          placeholder={placeholder}
          name={name}
          id={id}
          type={type}
          value={value}
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
