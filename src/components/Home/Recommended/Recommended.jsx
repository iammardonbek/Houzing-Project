import React from "react";
import Carousel from "react-elastic-carousel";
import Cards from "../../Generic Stuff/PropertyCard/Cards";
import { Container } from "./RecommendedStyle";
const Recommended = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, navigation: false },
    { width: 680, itemsToShow: 2 },
    { width: 950, itemsToShow: 3 },
    { width: 1180, itemsToShow: 3, navigation: false },
  ];

  return (
    <Container>
      <h1 className="title">Recommended</h1>
      <p className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <div>
        <Carousel
          itemsToShow={3}
          itemsToScroll={1}
          breakPoints={breakPoints}
          itemPadding={[10, 10]}
          enableAutoPlay
          autoPlaySpeed={2500}
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Carousel>
      </div>
    </Container>
  );
};

export default Recommended;
