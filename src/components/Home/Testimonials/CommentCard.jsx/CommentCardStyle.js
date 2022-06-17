import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "380px")};
`;
export const Top = styled.div`
  padding: 40px 48px 61px;
  background-color: white;
  text-align: center;
  box-shadow: 0px 10px 20px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
`;
export const Bottom = styled.div`
  position: relative;
  text-align: center;
  padding-top: 37px;
  h2 {
    text-transform: capitalize;
  }
  p {
    text-transform: capitalize;
  }
  img {
    position: absolute;
    top: -19px;
    left: 50%;
    transform: translateX(-50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  }
`;
