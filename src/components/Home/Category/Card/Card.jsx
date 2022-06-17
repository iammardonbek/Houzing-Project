import React from "react";
import { CardWrapper } from "./CardStyle";
import House from "../../../../Assets/house.png";
const Card = ({ img, title, icon }) => {
  return (
    <CardWrapper>
      <img src={img ? img : House} alt="house" />
      <div>
        <span>{icon}</span>
      </div>
      <h2>{title}</h2>
    </CardWrapper>
  );
};

export default Card;
