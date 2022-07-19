import React from "react";
import Cards from "../Generic Stuff/PropertyCard/Cards";
import { CardWrapper, Title, Body } from "../Properties/PropertiesStyle";
import { Container } from "./StyleFavorite";
import Footer from "../Generic Stuff/Footer/Footer";

const Favorite = () => {
  return (
    <Container>
      <Body>
        <Title>
          <h1 className="title">favourites</h1>
          <p className="subtitle">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Title>
        <CardWrapper>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </CardWrapper>
      </Body>
      <Footer />
    </Container>
  );
};

export default Favorite;
