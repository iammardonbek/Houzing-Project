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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: brightness(50%);
  }
`;
export const CarouselWrapper = styled.div`
  position: relative;
  height: 571px;
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
    line-height: 48px;
  }
  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
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
`;
