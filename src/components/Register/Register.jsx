import React from "react";
import { Container } from "./RegisterStyle";
import Footer from "../Generic Stuff/Footer/Footer";
import { Form, MainBody } from "../SignIn/SignInStyle";
import InputWithLabel from "../Generic Stuff/InputWithLabel/InputWithLabel";
import Button from "../Generic Stuff/Buttons/buttons";

const Register = () => {
  return (
    <Container>
      <MainBody>
        <Form>
          <h1>register</h1>
          <InputWithLabel placeholder=" " id="login" children="login" />
          <InputWithLabel
            placeholder=" "
            id="first_name"
            children="first name"
          />
          <InputWithLabel placeholder=" " id="last_name" children="last name" />
          <InputWithLabel placeholder=" " id="email" children="email" />
          <InputWithLabel placeholder=" " id="user_role" children="user role" />
          <InputWithLabel placeholder=" " id="password" children="password" />
          <InputWithLabel
            placeholder=" "
            id="Re-enter-password"
            children="re-enter password"
          />
          <Button mt="40px" width="100%" type={"primary"} children="register" />
        </Form>
      </MainBody>
      <Footer />
    </Container>
  );
};

export default Register;
