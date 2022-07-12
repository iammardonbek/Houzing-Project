import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 571px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: red;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
  }
`;
export const HouseInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 776px) {
    width: 600px;
  }
  @media (max-width: 776px) {
    width: 343px;
  }

  h1 {
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 48px;
    @media (max-width: 776px) {
      margin-bottom: 24px;
    }
  }
`;
