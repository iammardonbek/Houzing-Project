import React from "react";
import Cards from "../Generic Stuff/PropertyCard/Cards";
import { CardWrapper, Title, Body } from "../Properties/PropertiesStyle";
import { Container } from "./StyleFavorite";
import Footer from "../Generic Stuff/Footer/Footer";
import { FavoriteContext } from "../Hooks/context";
import { useContext } from "react";

const Favorite = () => {
  const [liked] = useContext(FavoriteContext);

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
          {liked.map((info) => (
            <Cards red="red" key={info.id} info={info} />
          ))}
        </CardWrapper>
      </Body>
      <Footer />
    </Container>
  );
};

export default Favorite;
