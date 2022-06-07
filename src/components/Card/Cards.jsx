import React from "react";
import forCard1 from "../../Assets/forCard1.jpg";
import HouseInfo from "../HouseInfo/HouseInfo";
import { CardWrapper, BottomCard, TopCard } from "./CardStyle";

const Cards = ({ height, width }) => {
  return (
    <CardWrapper width={width} height={height}>
      <TopCard>
        <img src={forCard1} alt="rasm" />
      </TopCard>
      <BottomCard>
        <h2>New Apartment Nice Wiew</h2>
        <p>Quincy St, Brooklyn, NY, USA</p>
        <HouseInfo stroke="#696969" />
      </BottomCard>
    </CardWrapper>
  );
};

export default Cards;
