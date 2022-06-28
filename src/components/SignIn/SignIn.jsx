import Footer from "../Generic Stuff/Footer/Footer";
import Button from "../Generic Stuff/Buttons/buttons";
import React from "react";
import { useRef } from "react";
import { MainBody, Container, Form, NewAccount } from "./SignInStyle";
import InputWithLabel from "../Generic Stuff/InputWithLabel/InputWithLabel";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_LINK: url } = process.env;
const SignIn = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const { mutate } = useMutation(
    () => {
      return fetch(`${url}public/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        const token = res.authenticationToken;
        if (token) navigate("/");
        localStorage.setItem("token", token);
      },
    }
  );
  const onSubmit = () => {
    mutate();
  };
  return (
    <Container>
      <MainBody>
        <Form>
          <h1>sign in</h1>
          <InputWithLabel
            ref={emailRef}
            children={"Login"}
            placeholder={" "}
            autoFocus
            id={"login"}
          />
          <InputWithLabel
            children={"Password"}
            placeholder={" "}
            id={"password"}
            type="password"
            ref={passwordRef}
          />
          <section>
            <span>
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember me</label>
            </span>
            <a href="#">Forgot</a>
          </section>
          <Button
            onClick={onSubmit}
            mt="40px"
            width="100%"
            type={"primary"}
            children="login"
          />
          <NewAccount>Create a new account</NewAccount>
        </Form>
      </MainBody>
      <Footer />
    </Container>
  );
};

export default SignIn;
