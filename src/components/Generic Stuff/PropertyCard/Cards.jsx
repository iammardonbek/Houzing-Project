import { Skeleton } from "antd";
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
import { useEffect } from "react";
import { useState } from "react";
import { FavoriteContext } from "../../Hooks/context";
import { useContext } from "react";

const Cards = ({ info, onClick, fav, red }) => {
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(fav ? true : false);
  const [liked, setLiked] = useContext(FavoriteContext);
  const addToFavorites = (info) => {
    if (!liked.map((value) => value.id === info.id) || liked.length === 0) {
      setLiked((value) => [...value, info]);
      setFavorited(true);
    } else {
      setLiked((liked) => liked.filter((value) => value.id !== info.id));
      setFavorited(false);
    }
    console.log(liked);
  };
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      info ? setLoading(false) : setLoading(true);
    }, 3000);
    return () => clearTimeout(timing);
  }, []);
  return (
    <>
      {loading ? (
        <CardWrapper>
          <TopCard>
            <Skeleton.Image />
          </TopCard>
          <BottomCard>
            <Skeleton active />
          </BottomCard>
        </CardWrapper>
      ) : (
        <CardWrapper>
          <TopCard onClick={onClick}>
            <img
              src={info?.attachments[0]?.imgPath || NotAvailable}
              alt="rasm"
            />
            <Featured>featured</Featured>
            <ForSale>for sale</ForSale>
          </TopCard>
          <BottomCard onClick={onClick}>
            <Owner>
              <img src={info?.img || NoPhoto} alt="rasm" />
            </Owner>
            <h2 className="cardTitle">
              {info?.name || "New Apartment Nice View"}
            </h2>
            <p className="cardSubtitle">
              {info?.city || "Quincy St, Brooklyn, NY, USA"}
            </p>
            <HouseSpecs>
              <span>
                <Beds fill="#696969" />
                <p className="HouseSpecs">
                  {info?.houseDetails?.room || "1"} beds
                </p>
              </span>
              <span>
                <Baths fill="#696969" />
                <p className="HouseSpecs">
                  {info?.houseDetails?.bath || "1"} baths
                </p>
              </span>
              <span>
                <Cars fill="#696969" />
                <p className="HouseSpecs">
                  {info?.houseDetails?.garage || "1"} garage
                </p>
              </span>
              <span>
                <Fields fill="#696969" />
                <p className="HouseSpecs">
                  {info?.houseDetails?.area || "1000"} sq ft
                </p>
              </span>
            </HouseSpecs>
          </BottomCard>
          <CardFooter>
            <div>
              <p className="discount">${info?.salePrice || "0"}/month</p>
              <h2 className="cardTitle">${info?.price || "0"}/month</h2>
            </div>
            <div>
              <span>
                <FullScreen />
              </span>
              <span
                className="red"
                red={red}
                onClick={() => addToFavorites(info)}
                style={{ background: favorited ? "red" : " #F6F8F9" }}
              >
                <Favorite fav />
              </span>
            </div>
          </CardFooter>
        </CardWrapper>
      )}
    </>
  );
};

export default Cards;
