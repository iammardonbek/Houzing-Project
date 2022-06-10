import React from "react";
import Cards from "../../Card/Cards";
import { Container, Carousel } from "./RecommendedStyle";

const Recommended = () => {
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };

  const items = [<Cards />, <Cards />, <Cards />, <Cards />, <Cards />];
  return (
    <Container>
      <h1 className="title">Recommended</h1>
      <p className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Carousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        infinite
        keyboardNavigation
        autoWidth
      />
    </Container>
  );
};

export default Recommended;
