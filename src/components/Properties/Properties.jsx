import React from "react";
import { useQuery } from "react-query";
import {
  Body,
  CardWrapper,
  Container,
  Sort,
  SortingPart,
  Title,
} from "./PropertiesStyle";
import { Search } from "../Generic Stuff/SearchBar/Search";
import Cards from "../Generic Stuff/PropertyCard/Cards";
import { Button } from "../Generic Stuff/Buttons/buttonStyle";
import { useState } from "react";
import Footer from "../Generic Stuff/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const { REACT_APP_BASE_LINK: url } = process.env;

const Properties = () => {
  const navigate = useNavigate();

  const { search } = useLocation();
  const [data, setData] = useState([]);
  const [cardsMaxLength, setCardsMaxLength] = useState(9);
  useQuery(
    ["get started", search],
    () => {
      return fetch(`${url}v1/houses/list${search}`).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );
  const onSelect = (id) => {
    navigate(`/properties/:${id}`);
  };
  const showMore = () => {
    setCardsMaxLength(cardsMaxLength + 3);
  };
  return (
    <Container>
      <Search />
      <Body>
        <Title>
          <h1 className="title">properties</h1>
          <p className="subtitle">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </Title>
        <SortingPart>
          <p>{data?.length} results</p>
          <Sort>
            sort by:
            <select>
              <option>newest listings</option>
            </select>
          </Sort>
        </SortingPart>
        <CardWrapper>
          {data.slice(0, cardsMaxLength).map((value) => (
            <Cards
              onClick={() => onSelect(value.id)}
              key={value.id}
              info={value}
              favorite={data.favorite}
            />
          ))}
        </CardWrapper>
        {data?.length > cardsMaxLength ? (
          <Button
            onClick={showMore}
            mt="48px"
            children="show more"
            type="primary"
            width="250px"
          />
        ) : null}
      </Body>
      <Footer />
    </Container>
  );
};

export default Properties;
