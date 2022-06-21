import styled from "styled-components";

export const HouseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 337px;
  p {
    color: white;
    font-size: 16px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 571px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    object-fit: cover;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: brightness(50%);
  }
`;
export const CarouselWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: aliceblue;
`;
export const CarouselText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    color: white;
    font-weight: 700;
    font-size: 44px;
    margin-bottom: 8px;
    @media (max-width: 700px) {
      font-size: 28px;
    }
  }
  > p {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 25px;
    @media (max-width: 700px) {
      font-size: 14px;
    }
  }
  > h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-top: 20px;
  }
`;
export const IconLeft = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  width: 45px;
  height: 45px;
  transform: translate(100%, -50%);
  cursor: pointer;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const IconRight = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  width: 45px;
  height: 45px;
  transform: translate(-100%, -50%);
  cursor: pointer;
  img {
    transform: rotate(180deg);
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
