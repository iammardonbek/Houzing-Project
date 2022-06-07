import React from "react";
import { Carousel } from "antd";
import unsplash from "../../Assets/unsplash.png";
import unsplash1 from "../../Assets/unsplash1.png";
import unsplash2 from "../../Assets/unsplash2.png";
import Button from "../Buttons/buttons";
import Arrow from "../../Assets/arrow.svg";
import HouseInfo from "../HouseInfo/HouseInfo";
import { useRef } from "react";
import {
  ImageWrapper,
  CarouselText,
  CarouselWrapper,
  IconLeft,
  IconRight,
} from "./SliderStyle";

export const Slider = () => {
  const slider = useRef();
  return (
    <CarouselWrapper>
      <Carousel ref={slider} autoplay>
        <ImageWrapper>
          <img src={unsplash} alt="rasm" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={unsplash1} alt="rasm" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={unsplash2} alt="rasm" />
        </ImageWrapper>
      </Carousel>
      <CarouselText>
        <h1>Skyper Pool Partment</h1>
        <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
        <HouseInfo color="white" />
        <h2>$5,250/mo</h2>
        <Button mt="40px" width="180px">
          read more
        </Button>
      </CarouselText>
      <IconLeft onClick={() => slider.current.prev()}>
        <img src={Arrow} alt="Rasm" />
      </IconLeft>
      <IconRight onClick={() => slider.current.next()}>
        <img src={Arrow} alt="Rasm" />
      </IconRight>
    </CarouselWrapper>
  );
};
