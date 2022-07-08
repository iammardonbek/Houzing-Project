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
} from "./ChosenHouseStyle";
import { useRef } from "react";

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
  return (
    <Container>
      <Body>
        <Pictures>
          <MainPic>
            <img src={data?.attachments[0]?.imgPath || NoImage} alt="rasm" />
          </MainPic>
          <SmallPics>
            <div>
              <img src={data?.attachments[0]?.imgPath || NoImage} alt="rasm" />
            </div>
            <div>
              <img src={data?.attachments[0]?.imgPath || NoImage} alt="rasm" />
            </div>
            <div>
              <img src={data?.attachments[0]?.imgPath || NoImage} alt="rasm" />
            </div>
            <div>
              <img src={data?.attachments[0]?.imgPath || NoImage} alt="rasm" />
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
            <p className="subtitle start">
              [{data?.address}, {data?.city}, {data?.country}]
            </p>
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
            {/* <div>
              <input id="terms" type="checkbox" />
              <label className="terms" htmlFor="terms">
                By submitting this form I agree to Terms of Use
              </label>
            </div> */}
            <Button width="100%" type="primary" children="send request" />
          </SendEmail>
        </Main>
      </Body>
    </Container>
  );
};

export default ChosenHouse;
