import React from "react";
import Cards from "../Card/Cards";
import { Container } from "./RecommendedStyle";

const Recommended = () => {
  return (
    <Container>
      <h1>Recommended</h1>
      <p>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Cards />
    </Container>
  );
};

export default Recommended;
