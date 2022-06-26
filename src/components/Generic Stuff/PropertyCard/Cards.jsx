import React from "react";
import NotAvailable from "../../../Assets/Image_not_available.png";
import NoPhoto from "../../../Assets/nophoto.png";
import { Baths, Beds, Cars, Fields, HouseSpecs } from "../../../style";
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
        <img src={info?.attachments[0]?.imgPath || NotAvailable} alt="rasm" />
        <Featured>featured</Featured>
        <ForSale>for sale</ForSale>
      </TopCard>
      <BottomCard>
        <Owner>
          <img src={info?.img || NoPhoto} alt="rasm" />
        </Owner>
        <h2 className="cardTitle">{info?.name || "New Apartment Nice View"}</h2>
        <p className="cardSubtitle">
          {info?.city || "Quincy St, Brooklyn, NY, USA"}
        </p>
        <HouseSpecs>
          <span>
            <Beds fill="#696969" />
            <p className="HouseSpecs">{info?.houseDetails?.room} beds</p>
          </span>
          <span>
            <Baths fill="#696969" />
            <p className="HouseSpecs">{info?.houseDetails?.bath} baths</p>
          </span>
          <span>
            <Cars fill="#696969" />
            <p className="HouseSpecs">{info?.houseDetails?.garage} garage</p>
          </span>
          <span>
            <Fields fill="#696969" />
            <p className="HouseSpecs">{info?.houseDetails?.area} sq ft</p>
          </span>
        </HouseSpecs>
      </BottomCard>
      <CardFooter>
        <div>
          <p className="discount">${info?.salePrice}/month</p>
          <h2 className="cardTitle">${info?.price}/month</h2>
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