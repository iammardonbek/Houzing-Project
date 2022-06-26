import React from "react";
import Footer from "../Generic Stuff/Footer/Footer";
import Button from "../Generic Stuff/Buttons/buttons";
import { MainBody, Container, Form, InputWrapper } from "./SignInStyle";

const SignIn = () => {
  return (
    <Container>
      <MainBody>
        <Form>
          <h1>sign in</h1>
          <InputWrapper className="searchformfld">
            <input placeholder=" " type="text" />
            <label>login</label>
          </InputWrapper>
          <InputWrapper className="searchformfld">
            <input placeholder=" " type="text" />
            <label>password</label>
          </InputWrapper>
          <section>
            <span>
              <input id="remember" type="checkbox" />
              <label for="remember">Remember me</label>
            </span>
            <a href="#">Forgot</a>
          </section>
          <Button mt="40px" width="100%" type={"primary"} children="login" />
        </Form>
      </MainBody>
      <Footer />
    </Container>
  );
};

export default SignIn;
