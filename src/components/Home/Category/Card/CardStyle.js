import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 3px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    filter: brightness(40%);
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h2 {
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    position: absolute;
    top: 65%;
  }
`;
