import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Container = styled.div`
  text-align: center;
  padding: 96px 20px 50px 20px;
  display: flex;
  justify-content: center;
  position: relative;
  > div {
    max-width: 1180px;
  }
`;
export const Carousel = styled(AliceCarousel)``;
