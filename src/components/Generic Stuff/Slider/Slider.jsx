import React from "react";
import { Carousel } from "antd";
import unsplash from "../../../Assets/unsplash.png";
import unsplash1 from "../../../Assets/unsplash1.png";
import unsplash2 from "../../../Assets/unsplash2.png";
import Button from "../Buttons/buttons";
import Arrow from "../../../Assets/arrow.svg";

import { useRef } from "react";
import {
  ImageWrapper,
  CarouselText,
  CarouselWrapper,
  IconLeft,
  IconRight,
  HouseDetails,
} from "./SliderStyle";
import { Cars, Baths, Fields, Beds } from "../../../style";

export const Slider = () => {
  const slider = useRef();
  return (
    <CarouselWrapper>
      <Carousel autoplay ref={slider}>
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
        <HouseDetails>
          <span>
            <Beds />
            <p>4 beds</p>
          </span>
          <span>
            <Baths />
            <p>5 baths</p>
          </span>
          <span>
            <Cars />
            <p>1 garage</p>
          </span>
          <span>
            <Fields />
            <p>1200 Sq Ft</p>
          </span>
        </HouseDetails>
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
