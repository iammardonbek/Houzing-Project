import styled from "styled-components";

export const HouseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : "337px")};
  height: ${({ height }) => (height ? height : "47px")};
  span {
    text-align: center;
  }
  p {
    margin-top: 10px;
    color: ${({ color }) => (color ? color : "#696969")};
    text-transform: capitalize;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
