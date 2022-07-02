import React from "react";
import { CardWrapper } from "./CardStyle";
import House from "../../../../Assets/house.png";
import { useNavigate } from "react-router-dom";
const Card = ({ img, title, icon, id }) => {
  const navigate = useNavigate();
  var goTo = () => navigate(`/properties?category_id=${id}`);
  return (
    <CardWrapper id={id} onClick={goTo}>
      <img src={img ? img : House} alt="house" />
      <div>
        <span>{icon}</span>
      </div>
      <h2>{title}</h2>
    </CardWrapper>
  );
};

export default Card;
