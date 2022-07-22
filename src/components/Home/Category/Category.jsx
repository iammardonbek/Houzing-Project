import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card/Card";
import { Container, Slider } from "./CategoryStyle";
import { ReactComponent as House } from "../../../Assets/house.svg";
import { useQuery } from "react-query";
import { useState } from "react";

const { REACT_APP_BASE_LINK: url } = process.env;
const Category = () => {
  const [data, setData] = useState([]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1080, itemsToShow: 4 },
  ];
  useQuery(
    [],
    () =>
      fetch(`${url}v1/categories`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => {
        setData(res.data);
      },
    }
  );
  return (
    <Container>
      <h1 className="title">Category</h1>
      <p className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Slider>
        <Carousel
          itemsToShow={4}
          itemsToScroll={1}
          breakPoints={breakPoints}
          itemPadding={[0, 20]}
        >
          {data.map((value, index) => {
            return (
              <Card key={index} title={value} id={index + 1} icon={<House />} />
            );
          })}
        </Carousel>
      </Slider>
    </Container>
  );
};

export default Category;
