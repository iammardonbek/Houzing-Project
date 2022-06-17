import React from "react";
import Carousel from "react-elastic-carousel";
import CommentCard from "./CommentCard.jsx/CommentCard";
import { Container } from "./TestimonialsStyle";

const Testimonials = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, navigation: false },
    { width: 650, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1180, itemsToShow: 3, navigation: false },
  ];
  return (
    <Container>
      <h1 className="title">Testimonials</h1>
      <p className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <div>
        <Carousel
          itemsToShow={3}
          itemsToScroll={1}
          breakPoints={breakPoints}
          itemPadding={[0, 20]}
          enableAutoPlay
          autoPlaySpeed={2500}
        >
          <CommentCard
            userName={"mardonbek madyorov"}
            profession="web-developer"
          />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonials;
