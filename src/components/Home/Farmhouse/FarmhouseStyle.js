import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 571px;
  overflow: hidden;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    filter: brightness(50%);
  }
`;
export const HouseInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 48px;
  }
`;
