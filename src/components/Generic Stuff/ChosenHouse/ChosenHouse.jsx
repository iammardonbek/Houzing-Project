import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Cards from "../PropertyCard/Cards";

import { Progress } from "antd";
// ---------Icons----------
import { ReactComponent as Air } from "../../../Assets/air.svg";
import { ReactComponent as Barbecue } from "../../../Assets/barbecue.svg";
import { ReactComponent as Chair } from "../../../Assets/chair.svg";
import { ReactComponent as Dryer } from "../../../Assets/dryer.svg";
import { ReactComponent as Gym } from "../../../Assets/gym.svg";
import { ReactComponent as Laundry } from "../../../Assets/laundry.svg";
import { ReactComponent as Lawn } from "../../../Assets/lawn.svg";
import { ReactComponent as Microwave } from "../../../Assets/microwave.svg";
import { ReactComponent as Pool } from "../../../Assets/pool.svg";
import { ReactComponent as Refrigerator } from "../../../Assets/refrigerator.svg";
import { ReactComponent as Sauna } from "../../../Assets/sauna.svg";
import { ReactComponent as Shower } from "../../../Assets/shower.svg";
import { ReactComponent as TV } from "../../../Assets/tv.svg";
import { ReactComponent as Washer } from "../../../Assets/washer.svg";
import { ReactComponent as WIFI } from "../../../Assets/wifi.svg";
import { ReactComponent as Window } from "../../../Assets/window.svg";
import { ReactComponent as Share } from "../../../Assets/share.svg";
import { ReactComponent as Year } from "../../../Assets/year.svg";
import { ReactComponent as DownIcon } from "../../../Assets/download.svg";
import { ReactComponent as Star } from "../../../Assets/star.svg";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import NoImage from "../../../Assets/Image_not_available.png";
import User from "../../../Assets/user.png";
import NoPhoto from "../../../Assets/nophoto.png";
import { Favorite } from "../PropertyCard/CardStyle";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Buttons/buttons";
import emailjs from "@emailjs/browser";
import { Baths, Beds, Cars, Fields } from "../../../style";
import {
  Body,
  Container,
  MainPic,
  Pictures,
  SmallPics,
  Main,
  MainText,
  SendEmail,
  Headline,
  ShareAndSave,
  Details,
  OwnerAvatar,
  OwnerContacts,
  HouseSpecs,
  SecondHeadline,
  Download,
  DocumentWrapper,
  Location,
  PropertyDetails,
  PropertyInfo,
  Features,
  Furniture,
  IconBg,
  Tour,
  TourInfo,
  SelectWithLabel,
  Review,
  Bars,
  Opinions,
  UserAvatar,
  DateAdded,
  Stars,
  LeaveReview,
  SimilarListings,
} from "./ChosenHouseStyle";
import { useRef } from "react";
import Footer from "../Footer/Footer";

const { REACT_APP_BASE_LINK: url } = process.env;
const ChosenHouse = () => {
  const form = useRef();
  const reviewForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rqpg6xm",
      "template_rmxz3sp",
      form.current,
      "nTtuO1V8uuOTwlRK2"
    );
  };
  const sendReview = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rqpg6xm",
      "template_38tzet9",
      reviewForm.current,
      "nTtuO1V8uuOTwlRK2"
    );
  };
  const { id } = useParams();
  const [data, setData] = useState();
  const breakPoints = [
    { width: 1, itemsToShow: 1, navigation: false },
    { width: 680, itemsToShow: 2 },
    { width: 950, itemsToShow: 3 },
    { width: 1180, itemsToShow: 3, navigation: false },
  ];
  useQuery(
    [],
    () => {
      return fetch(`${url}v1/houses/${id.replace(":", "")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res.data);
      },
    }
  );
  var Address = [];
  Address.push(data?.address, data?.city, data?.country);
  return (
    <>
      <Container>
        <Body>
          <Pictures>
            <MainPic>
              <img src={data?.attachments[0]?.imgPath || NoImage} alt="rasm" />
            </MainPic>
            <SmallPics>
              <div>
                <img
                  src={data?.attachments[0]?.imgPath || NoImage}
                  alt="rasm"
                />
              </div>
              <div>
                <img
                  src={data?.attachments[0]?.imgPath || NoImage}
                  alt="rasm"
                />
              </div>
              <div className="none">
                <img
                  src={data?.attachments[0]?.imgPath || NoImage}
                  alt="rasm"
                />
              </div>
              <div className="none">
                <img
                  src={data?.attachments[0]?.imgPath || NoImage}
                  alt="rasm"
                />
              </div>
            </SmallPics>
          </Pictures>
          <Main>
            <MainText>
              <Headline>
                <h1 className="title">
                  {data?.name || "Luxury Family Loft by Victoria Park"}
                </h1>
                <ShareAndSave>
                  <div>
                    <IconBg>
                      <Share />
                    </IconBg>
                    <p className="HouseSpecs">share</p>
                  </div>
                  <div>
                    <IconBg>
                      <Favorite />
                    </IconBg>
                    <p className="HouseSpecs">save</p>
                  </div>
                </ShareAndSave>
              </Headline>
              <p className="subtitle start">
                {Address.filter((value) => value !== "").join(", ")}
              </p>
              <SecondHeadline>
                <HouseSpecs>
                  <span>
                    <Beds fill="#696969" />
                    <p className="HouseSpecs">
                      {data?.houseDetails?.room === 0
                        ? "2"
                        : data?.houseDetails?.room}{" "}
                      beds
                    </p>
                  </span>
                  <span>
                    <Baths fill="#696969" />
                    <p className="HouseSpecs">
                      {data?.houseDetails?.bath === 0
                        ? "1"
                        : data?.houseDetails?.bath}{" "}
                      baths
                    </p>
                  </span>
                  <span>
                    <Cars fill="#696969" />
                    <p className="HouseSpecs">
                      {data?.houseDetails?.garage} garage
                    </p>
                  </span>
                  <span>
                    <Fields fill="#696969" />
                    <p className="HouseSpecs">
                      {data?.houseDetails?.area} sq ft
                    </p>
                  </span>
                  <span>
                    <Year />
                    <p className="HouseSpecs">
                      year built: {data?.houseDetails?.year || "2020"}
                    </p>
                  </span>
                </HouseSpecs>
                <div>
                  <p className="discount">${data?.salePrice}/month</p>
                  <h2 className="real_price">${data?.price}/month</h2>
                  <p className="HouseSpecs">Est.Mortgage</p>
                </div>
              </SecondHeadline>
              <h2 className="heading">description</h2>
              <p className="HouseSpecs">{data?.description}</p>
              <h2 className="heading">documents</h2>
              <DocumentWrapper>
                <Download>
                  <span>
                    <DownIcon />
                    <p className="HouseSpecs">test_property.pdf</p>
                    <a
                      href="https://github.com/linkstartup/book/raw/master/JavaScript%20The%20Definitive%20Guide%20Master%20the%20Worlds%20Most-Used%20Programming%20Language%20by%20David%20Flanagan%20(z-lib.org).pdf"
                      download
                    >
                      download
                    </a>
                  </span>
                </Download>
                <Download>
                  <span>
                    <DownIcon />
                    <p className="HouseSpecs">test_property.pdf</p>
                    <a
                      href="https://github.com/linkstartup/book/raw/master/JavaScript%20The%20Definitive%20Guide%20Master%20the%20Worlds%20Most-Used%20Programming%20Language%20by%20David%20Flanagan%20(z-lib.org).pdf"
                      download
                    >
                      download
                    </a>
                  </span>
                </Download>
                <Download>
                  <span>
                    <DownIcon />
                    <p className="HouseSpecs">test_property.pdf</p>
                    <a
                      href="https://github.com/linkstartup/book/raw/master/JavaScript%20The%20Definitive%20Guide%20Master%20the%20Worlds%20Most-Used%20Programming%20Language%20by%20David%20Flanagan%20(z-lib.org).pdf"
                      download
                    >
                      download
                    </a>
                  </span>
                </Download>
              </DocumentWrapper>
              <h2 className="heading">location</h2>
              <Location>
                <div>
                  <h2 className="font14">Address:</h2>
                  <p className="HouseSpecs">
                    {data?.address || "329 Queensberry Street"}
                  </p>
                </div>
                <div>
                  <h2 className="font14">State/County: </h2>
                  <p className="HouseSpecs">{data?.country || "USA"}</p>
                </div>
                <div>
                  <h2 className="font14">City:</h2>
                  <p className="HouseSpecs">{data?.city || "Jersey City"}</p>
                </div>
                <div>
                  <h2 className="font14">zip:</h2>
                  <p className="HouseSpecs">{data?.zipCode || "365448"}</p>
                </div>
                <div>
                  <h2 className="font14">area:</h2>
                  <p className="HouseSpecs">{data?.area || "Greenville"}</p>
                </div>
                <div>
                  <h2 className="font14">country:</h2>
                  <p className="HouseSpecs">{data?.country || "USA"}</p>
                </div>
              </Location>
              <iframe
                title="ok"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1369.2399146915293!2d60.60771885024921!3d41.55988675049472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc93b02466799%3A0xeaa23fff9be8f49d!2sDarital!5e0!3m2!1sen!2s!4v1657363417461!5m2!1sen!2s"
                style={{ border: "0", margin: "25px 0px" }}
                loading="lazy"
              ></iframe>
              <PropertyDetails>
                <h2 className="heading">Property Details</h2>
                <PropertyInfo>
                  <div>
                    <h2 className="font14">property ID:</h2>
                    <p className="HouseSpecs">{data?.id || "not given"}</p>
                  </div>
                  <div>
                    <h2 className="font14">bedrooms:</h2>
                    <p className="HouseSpecs">
                      {data?.houseDetails?.room || "not given"}
                    </p>
                  </div>
                  <div>
                    <h2 className="font14">property type:</h2>
                    <p className="HouseSpecs">
                      {data?.category?.name || "apartment"}
                    </p>
                  </div>
                  <div>
                    <h2 className="font14">price:</h2>
                    <p className="HouseSpecs">${data?.price || "100 000"}</p>
                  </div>
                  <div>
                    <h2 className="font14">bathrooms:</h2>
                    <p className="HouseSpecs">
                      {data?.houseDetails?.bath || "1"}
                    </p>
                  </div>
                  <div>
                    <h2 className="font14">property status:</h2>
                    <p className="HouseSpecs">
                      {data?.status ? "for sale" : "sold"}
                    </p>
                  </div>
                  <div>
                    <h2 className="font14">property size:</h2>
                    <p className="HouseSpecs">
                      {data?.houseDetails?.area || "1200"} sq ft
                    </p>
                  </div>
                  <div>
                    <h2 className="font14">garage:</h2>
                    <p className="HouseSpecs">
                      {data?.houseDetails?.garage || "1"}
                    </p>
                  </div>
                  <div>
                    <h2 className="font14">year built:</h2>
                    <p className="HouseSpecs">
                      {data?.houseDetails?.yearBuilt || "2020-01-09"}
                    </p>
                  </div>
                  <div>
                    <h2 className="font14">garage size:</h2>
                    <p className="HouseSpecs">200 sq ft</p>
                  </div>
                </PropertyInfo>
              </PropertyDetails>
              <Features>
                <h2 className="heading">features</h2>
                <Furniture>
                  <div>
                    <IconBg>
                      <Air />
                    </IconBg>
                    <p className="HouseSpecs">air conditioning</p>
                  </div>
                  <div>
                    <IconBg>
                      <Lawn />
                    </IconBg>
                    <p className="HouseSpecs">lawn</p>
                  </div>
                  <div>
                    <IconBg>
                      <Refrigerator />
                    </IconBg>
                    <p className="HouseSpecs">refrigerator</p>
                  </div>
                  <div>
                    <IconBg>
                      <Washer />
                    </IconBg>
                    <p className="HouseSpecs">washer</p>
                  </div>
                  <div>
                    <IconBg>
                      <Barbecue />
                    </IconBg>
                    <p className="HouseSpecs">barbeque</p>
                  </div>
                  <div>
                    <IconBg>
                      <Laundry />
                    </IconBg>
                    <p className="HouseSpecs">laundry</p>
                  </div>
                  <div>
                    <IconBg>
                      <Sauna />
                    </IconBg>
                    <p className="HouseSpecs">sauna</p>
                  </div>
                  <div>
                    <IconBg>
                      <WIFI />
                    </IconBg>
                    <p className="HouseSpecs">WIFI</p>
                  </div>
                  <div>
                    <IconBg>
                      <Dryer />
                    </IconBg>
                    <p className="HouseSpecs">dryer</p>
                  </div>
                  <div>
                    <IconBg>
                      <Microwave />
                    </IconBg>
                    <p className="HouseSpecs">microwave</p>
                  </div>
                  <div>
                    <IconBg>
                      <Pool />
                    </IconBg>
                    <p className="HouseSpecs">swimming pool</p>
                  </div>
                  <div>
                    <IconBg>
                      <Window />
                    </IconBg>
                    <p className="HouseSpecs">window coverings</p>
                  </div>
                  <div>
                    <IconBg>
                      <Gym />
                    </IconBg>
                    <p className="HouseSpecs">gym</p>
                  </div>
                  <div>
                    <IconBg>
                      <Shower />
                    </IconBg>
                    <p className="HouseSpecs">outdoor shower</p>
                  </div>
                  <div>
                    <IconBg>
                      <TV />
                    </IconBg>
                    <p className="HouseSpecs">tv cable</p>
                  </div>
                  <div>
                    <IconBg>
                      <Chair />
                    </IconBg>
                    <p className="HouseSpecs">dining room</p>
                  </div>
                </Furniture>
              </Features>
              <Tour>
                <h2 className="heading">schedule a tour</h2>
                <TourInfo>
                  <SelectWithLabel className="select_label">
                    <label htmlFor="date">date</label>
                    <select id="date">
                      <option>--Choose A Date--</option>
                      <option>01.01.2022</option>
                      <option>02.01.2022</option>
                      <option>03.01.2022</option>
                      <option>04.01.2022</option>
                    </select>
                  </SelectWithLabel>
                  <SelectWithLabel className="select_label">
                    <label htmlFor="time">time</label>
                    <select id="time">
                      <option>--Choose Time--</option>
                      <option>11:00 am</option>
                      <option>12:00 am</option>
                      <option>01:00 pm</option>
                    </select>
                  </SelectWithLabel>
                </TourInfo>
                <h3>your information</h3>
                <div>
                  <InputWithLabel
                    children="name"
                    type="text"
                    id="name"
                    placeholder={" "}
                  />
                  <InputWithLabel
                    children="phone"
                    type="phone"
                    id="phone"
                    placeholder={" "}
                  />
                  <InputWithLabel
                    children="email"
                    type="email"
                    id="email"
                    placeholder={" "}
                  />
                </div>
                <textarea rows={"3"} placeholder="Enter Your Message" />
                <Button
                  width={"250px"}
                  mt="24px"
                  children={"Submit a tour request"}
                  type={"primary"}
                />
              </Tour>
              <Review>
                <h2 className="heading">4.67 (14 reviews)</h2>
                <Bars>
                  <div>
                    <p className="HouseSpecs">Cleanliness</p>
                    <section>
                      <Progress
                        strokeWidth="5px"
                        showInfo={false}
                        format={(number) => number}
                        percent={94}
                      />
                      <p>4.7</p>
                    </section>
                  </div>
                  <div>
                    <p className="HouseSpecs">accuracy</p>
                    <section>
                      <Progress
                        strokeWidth="5px"
                        showInfo={false}
                        format={(number) => number}
                        percent={94}
                      />
                      <p>4.7</p>
                    </section>
                  </div>
                  <div>
                    <p className="HouseSpecs">Communication</p>
                    <section>
                      <Progress
                        strokeWidth="5px"
                        showInfo={false}
                        format={(number) => number}
                        percent={98}
                      />
                      <p>4.9</p>
                    </section>
                  </div>
                  <div>
                    <p className="HouseSpecs">location</p>
                    <section>
                      <Progress
                        strokeWidth="5px"
                        showInfo={false}
                        format={(number) => number}
                        percent={98}
                      />
                      <p>4.9</p>
                    </section>
                  </div>
                  <div>
                    <p className="HouseSpecs">check-in</p>
                    <section>
                      <Progress
                        strokeWidth="5px"
                        showInfo={false}
                        format={(number) => number}
                        percent={98}
                      />
                      <p>4.9</p>
                    </section>
                  </div>
                  <div>
                    <p className="HouseSpecs">value</p>
                    <section>
                      <Progress
                        strokeWidth="5px"
                        showInfo={false}
                        format={(number) => number}
                        percent={98}
                      />
                      <p>4.9</p>
                    </section>
                  </div>
                </Bars>
                <Opinions>
                  <div>
                    <UserAvatar>
                      <img src={User} alt="rasm" />
                    </UserAvatar>
                    <h3>Jane Cooper</h3>
                    <DateAdded>
                      <p className="HouseSpecs">April 6, 2021 at 3:21 AM</p>
                      <div>
                        <Stars>
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </Stars>
                        <p className="HouseSpecs">(5 reviews)</p>
                      </div>
                    </DateAdded>
                    <p className="HouseSpecs">
                      Every single thing we tried with John was delicious! Found
                      some awesome places we would definitely go back to on our
                      trip. John was also super friendly and passionate about
                      Beşiktaş and Istanbul.{" "}
                    </p>
                  </div>
                  <div>
                    <UserAvatar>
                      <img src={User} alt="rasm" />
                    </UserAvatar>
                    <h3>Jane Cooper</h3>
                    <DateAdded>
                      <p className="HouseSpecs">April 6, 2021 at 3:21 AM</p>
                      <div>
                        <Stars>
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </Stars>
                        <p className="HouseSpecs">(5 reviews)</p>
                      </div>
                    </DateAdded>
                    <p className="HouseSpecs">
                      Every single thing we tried with John was delicious! Found
                      some awesome places we would definitely go back to on our
                      trip. John was also super friendly and passionate about
                      Beşiktaş and Istanbul.{" "}
                    </p>
                  </div>
                </Opinions>
              </Review>
              <LeaveReview>
                <h2 className="heading">Write a Review</h2>
                <section>
                  <div>
                    <p className="HouseSpecs">Cleanliness</p>
                    <Stars>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Stars>
                  </div>
                  <div>
                    <p className="HouseSpecs">Accuracy</p>
                    <Stars>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Stars>
                  </div>
                  <div>
                    <p className="HouseSpecs">Communication</p>
                    <Stars>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Stars>
                  </div>
                  <div>
                    <p className="HouseSpecs">location</p>
                    <Stars>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Stars>
                  </div>
                  <div>
                    <p className="HouseSpecs">check-in</p>
                    <Stars>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Stars>
                  </div>
                  <div>
                    <p className="HouseSpecs">value</p>
                    <Stars>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </Stars>
                  </div>
                </section>
                <form ref={reviewForm} onSubmit={sendReview}>
                  <InputWithLabel
                    children="name"
                    type="text"
                    id="name"
                    placeholder={" "}
                    name="reviewerName"
                  />
                  <InputWithLabel
                    children="email"
                    type="email"
                    name="user_email"
                    id="email"
                    placeholder={" "}
                  />
                  <textarea
                    name="review"
                    rows={"3"}
                    placeholder="Enter Your Message"
                  />
                  <Button
                    width={"250px"}
                    mt="24px"
                    children={"send your review"}
                    type={"primary"}
                  />
                </form>
              </LeaveReview>
            </MainText>
            <SendEmail ref={form} onSubmit={sendEmail}>
              <Details>
                <OwnerAvatar>
                  <img src={data?.user?.img || NoPhoto} alt="rasm" />
                </OwnerAvatar>
                <OwnerContacts>
                  <h2 className="cardTitle">mardonbek madyorov</h2>
                  <p className="subtitle">(+998)977920599</p>
                </OwnerContacts>
              </Details>
              <InputWithLabel
                placeholder={" "}
                name="user_name"
                type="text"
                children="name"
              />
              <InputWithLabel
                placeholder={" "}
                name="user_phone"
                type="phone"
                children="phone"
              />
              <InputWithLabel
                placeholder={" "}
                name="user_email"
                type="email"
                children="email"
              />
              <InputWithLabel
                placeholder={" "}
                name="message"
                type="text"
                children="message"
                defaultValue="Hello, I am interested in [New Apartment]"
              />
              <Button width="100%" type="primary" children="send request" />
            </SendEmail>
          </Main>
          <SimilarListings>
            <h1 className="title">similar listings</h1>
            <p className="subtitle">
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </p>
            <div>
              <Carousel
                itemsToShow={3}
                itemsToScroll={1}
                breakPoints={breakPoints}
                itemPadding={[10, 10]}
                enableAutoPlay
                autoPlaySpeed={2500}
              >
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </Carousel>
            </div>
          </SimilarListings>
        </Body>
      </Container>
      <Footer />
    </>
  );
};

export default ChosenHouse;
