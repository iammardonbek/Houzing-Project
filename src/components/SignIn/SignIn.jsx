import Footer from "../Generic Stuff/Footer/Footer";
import Button from "../Generic Stuff/Buttons/buttons";
import React from "react";
import { useRef } from "react";
import { MainBody, Container, Form, NewAccount } from "./SignInStyle";
import InputWithLabel from "../Generic Stuff/InputWithLabel/InputWithLabel";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { REACT_APP_BASE_LINK: url } = process.env;
const SignIn = () => {
  const [error, setError] = useState("");
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
        localStorage.setItem("token", token);
        token === null ? setError("invalid email or password") : navigate("/");
        console.log(token);
      },
    }
  );
  const onSubmit = () => {
    mutate();
  };
  const redirect = () => {
    navigate("/Register");
  };
  return (
    <Container>
      <MainBody>
        <Form>
          <h1>sign in</h1>
          <p>{error}</p>
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
          <NewAccount onClick={redirect}>Create a new account</NewAccount>
        </Form>
      </MainBody>
      <Footer />
    </Container>
  );
};

export default SignIn;
