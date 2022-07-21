import React from "react";
import { Container } from "../Favorite/StyleFavorite";
import { Body, Title } from "../Properties/PropertiesStyle";
import Footer from "../Generic Stuff/Footer/Footer";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Form } from "../SignIn/SignInStyle";
import Button from "../Generic Stuff/Buttons/buttons";
import InputWithLabel from "../Generic Stuff/InputWithLabel/InputWithLabel";

const Contacts = () => {
  const form = useRef();
  const ContactUs = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rqpg6xm",
      "template_rmxz3sp",
      form.current,
      "nTtuO1V8uuOTwlRK2"
    );
  };

  return (
    <Container>
      <Body>
        <Title>
          <h1 className="title">contact us</h1>
          <p className="subtitle">
            - Have question and need to talk to us? Please complete this form
            and we will get in touch as soon as possible.
          </p>
        </Title>
        <Form ref={form} onSubmit={ContactUs}>
          <InputWithLabel
            id={"email"}
            name="user_name"
            type={"email"}
            placeholder={" "}
            children={"your email"}
          />
          <InputWithLabel
            name={"subject"}
            id={"title"}
            type="text"
            placeholder={" "}
            children={"subject"}
          />
          <InputWithLabel
            name={"message"}
            id={"message"}
            type="text"
            placeholder={" "}
            children={"message"}
          />
          <Button width="100%" mt="40px" type={"primary"} children={"send"} />
        </Form>
      </Body>
      <Footer />
    </Container>
  );
};

export default Contacts;
