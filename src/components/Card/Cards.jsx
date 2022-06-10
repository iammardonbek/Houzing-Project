import React from "react";
import NotAvailable from "../../Assets/Image_not_available.png";
import NoPhoto from "../../Assets/nophoto.png";
import { Baths, Beds, Cars, Fields, HouseSpecs } from "../../style";
import {
  CardWrapper,
  BottomCard,
  TopCard,
  CardFooter,
  Featured,
  ForSale,
  FullScreen,
  Favorite,
  Owner,
} from "./CardStyle";

const Cards = ({ info }) => {
  return (
    <CardWrapper>
      <TopCard>
        <img src={info?.img || NotAvailable} alt="rasm" />
        <Featured>featured</Featured>
        <ForSale>for sale</ForSale>
        <Owner>
          <img src={info?.img || NoPhoto} alt="rasm" />
        </Owner>
      </TopCard>
      <BottomCard>
        <h2 className="cardTitle">New Apartment Nice View</h2>
        <p className="cardSubtitle">Quincy St, Brooklyn, NY, USA</p>
        <HouseSpecs>
          <span>
            <Beds fill="#696969" />
            <p className="HouseSpecs">4 beds</p>
          </span>
          <span>
            <Baths fill="#696969" />
            <p className="HouseSpecs">5 baths</p>
          </span>
          <span>
            <Cars fill="#696969" />
            <p className="HouseSpecs">1 garage</p>
          </span>
          <span>
            <Fields fill="#696969" />
            <p className="HouseSpecs">1200 sq ft</p>
          </span>
        </HouseSpecs>
      </BottomCard>
      <CardFooter>
        <div>
          <p className="discount">$2,800/mo</p>
          <h2 className="cardTitle">$7,500/mo</h2>
        </div>
        <div>
          <span>
            <FullScreen />
          </span>
          <span>
            <Favorite />
          </span>
        </div>
      </CardFooter>
    </CardWrapper>
  );
};

export default Cards;
