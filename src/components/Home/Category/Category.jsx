import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card/Card";
import { Container, Slider } from "./CategoryStyle";
import Apartment from "../../../Assets/apartment.png";
import Office from "../../../Assets/office.png";
import Villa from "../../../Assets/villa.png";
import { ReactComponent as ApartmentSvg } from "../../../Assets/apartment.svg";
import { ReactComponent as House } from "../../../Assets/house.svg";
import { ReactComponent as OfficeSvg } from "../../../Assets/office.svg";
import { ReactComponent as VillaSvg } from "../../../Assets/villa.svg";

const Category = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 4 },
    { width: 1180, itemsToShow: 4 },
  ];

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
          <Card title="house" icon={<House />} />
          <Card title="Apartment" img={Apartment} icon={<ApartmentSvg />} />
          <Card title="office" img={Office} icon={<OfficeSvg />} />
          <Card title="villa" img={Villa} icon={<VillaSvg />} />
          <Card title="house" icon={<House />} />
          <Card title="Apartment" img={Apartment} icon={<ApartmentSvg />} />
          <Card title="office" img={Office} icon={<OfficeSvg />} />
          <Card title="villa" img={Villa} icon={<VillaSvg />} />
        </Carousel>
      </Slider>
    </Container>
  );
};

export default Category;
