import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? width : "auto")};
  margin-right: ${({ mr }) => (mr ? mr : "auto")};
  margin-left: ${({ ml }) => (ml ? ml : "auto")};
  margin-top: ${({ mt }) => (mt ? mt : "auto")};
  margin-bottom: ${({ mb }) => (mb ? mb : "auto")};
  height: 44px;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  padding-left: 16px;
  padding-right: 16px;
`;
export const InputLogo = styled.div``;
export const Input = styled.input`
  outline: none;
  border: none;
  color: var(--headerColor);
  width: 100%;
  padding-left: ${({ pl }) => (pl ? pl : "auto")};
`;
