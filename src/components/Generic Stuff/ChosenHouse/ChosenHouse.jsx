import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import NoImage from "../../../Assets/Image_not_available.png";
import NoPhoto from "../../../Assets/nophoto.png";
import { Favorite } from "../PropertyCard/CardStyle";
import { ReactComponent as Share } from "../../../Assets/share.svg";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Buttons/buttons";
import emailjs from "@emailjs/browser";
import { Baths, Beds, Cars, Fields } from "../../../style";
import { ReactComponent as Year } from "../../../Assets/year.svg";
import { ReactComponent as DownIcon } from "../../../Assets/download.svg";
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
} from "./ChosenHouseStyle";
import { useRef } from "react";
import Footer from "../Footer/Footer";

const { REACT_APP_BASE_LINK: url } = process.env;
const ChosenHouse = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rqpg6xm",
      "template_rmxz3sp",
      form.current,
      "nTtuO1V8uuOTwlRK2"
    );
  };
  const { id } = useParams();
  const [data, setData] = useState();

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
        console.log(data);
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
                    <span>
                      <Share />
                    </span>
                    <p className="HouseSpecs">share</p>
                  </div>
                  <div>
                    <span>
                      <Favorite />
                    </span>
                    <p className="HouseSpecs">save</p>
                  </div>
                </ShareAndSave>
              </Headline>
              <p className="subtitle start">{Address.join(", ")}</p>
              <SecondHeadline>
                <HouseSpecs>
                  <span>
                    <Beds fill="#696969" />
                    <p className="HouseSpecs">
                      {data?.houseDetails?.room} beds
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
        </Body>
      </Container>
      <Footer />
    </>
  );
};

export default ChosenHouse;
