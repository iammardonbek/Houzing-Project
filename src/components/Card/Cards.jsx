import React from "react";
import NotAvailable from "../../Assets/Image_not_available.png";
import { CardWrapper, BottomCard, TopCard, CardFooter } from "./CardStyle";

const Cards = ({ info }) => {
  return (
    <CardWrapper>
      <TopCard>
        <img src={info?.img || NotAvailable} alt="rasm" />
      </TopCard>
      <BottomCard>
        <h2 className="cardTitle">New Apartment Nice View</h2>
        <p className="cardSubtitle">Quincy St, Brooklyn, NY, USA</p>
      </BottomCard>
      <CardFooter>
        <h2 className="cardTitle">$7,500/mo</h2>
      </CardFooter>
    </CardWrapper>
  );
};

export default Cards;
