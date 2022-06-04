import styled from "styled-components";

const ButtonType = ({ type }) => {
  switch (type) {
    case "primary":
      return {
        background: "#0061df",
        color: "#ffffff",
        border: "none",
      };
    case "secondary":
      return {
        border: "1px solid #E6E9EC",
        color: "#0d263b",
        background: "white",
      };
    default:
      return {
        border: "1px solid #E6E9EC",
        color: "#ffffff",
        background: "transparent",
      };
  }
};

export const Button = styled.button`
  ${({ type }) => ButtonType({ type })}
  width: ${({ width }) => (width ? width : "auto")};
  margin-right: ${({ mr }) => (mr ? mr : "auto")};
  margin-left: ${({ ml }) => (ml ? ml : "auto")};
  margin-top: ${({ mt }) => (mt ? mt : "auto")};
  margin-bottom: ${({ mb }) => (mb ? mb : "auto")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  height: 44px;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;

  font-size: 14px;
  line-height: 20px;
`;
