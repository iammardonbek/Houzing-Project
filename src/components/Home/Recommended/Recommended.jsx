import React from "react";
import Cards from "../../Card/Cards";
import { Container, Carousel } from "./RecommendedStyle";
import { IconLeft, IconRight } from "../../Slider/SliderStyle";
import Arrow from "../../../Assets/arrow.svg";
import { useRef } from "react";
const Recommended = () => {
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  const sliderChange = useRef();

  const items = [<Cards />, <Cards />, <Cards />, <Cards />, <Cards />];
  return (
    <Container>
      <div>
        <h1 className="title">Recommended</h1>
        <p className="subtitle">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
        <Carousel
          ref={sliderChange}
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
          infinite
          keyboardNavigation
          // autoWidth
        />
      </div>
      <IconLeft onClick={() => sliderChange.current.slidePrev()}>
        <img src={Arrow} alt="Rasm" />
      </IconLeft>
      <IconRight onClick={() => sliderChange.current.slideNext()}>
        <img src={Arrow} alt="Rasm" />
      </IconRight>
    </Container>
  );
};

export default Recommended;
