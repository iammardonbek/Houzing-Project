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
    case "cancel":
      return {
        background: "transparent",
        color: "0d263b",
        border: "1px solid #E6E9EC",
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
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  text-transform: capitalize;
  padding: 12px 16px;
  height: 44px;
  :active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  p {
    margin-bottom: 0;
  }
`;
