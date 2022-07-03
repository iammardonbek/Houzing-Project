import React, { useState } from "react";
import { Container } from "./RegisterStyle";
import Footer from "../Generic Stuff/Footer/Footer";
import { Form, MainBody } from "../SignIn/SignInStyle";
import InputWithLabel from "../Generic Stuff/InputWithLabel/InputWithLabel";
import Button from "../Generic Stuff/Buttons/buttons";
// import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useRef } from "react";

const { REACT_APP_BASE_LINK: url } = process.env;
const Register = () => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const userRef = useRef("");
  const passwordRef = useRef("");
  // var navigate = useNavigate();
  const [err, setErr] = useState([]);
  const { mutate } = useMutation(
    () => {
      return fetch(`${url}public/auth/register`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: emailRef.current.value,
          firstname: firstNameRef.current.value,
          lastname: lastNameRef.current.value,
          password: passwordRef.current.value,
          roleIdSet: [userRef.current.value],
        }),
      }).then((res) => res.json());
    },
    {
      onSuccess: () => {
        setErr(err);
        localStorage.setItem(
          "newToken",
          "4d107b6e-c1fa-43eb-89c6-1a657ae9538f"
        );
        // navigate("/");
      },
    }
  );
  const onSubmit = () => {
    console.log(err);
    mutate();
  };
  return (
    <Container>
      <MainBody>
        <Form>
          <h1>register</h1>
          <InputWithLabel
            ref={firstNameRef}
            placeholder=" "
            id="first_name"
            children="first name"
          />
          <InputWithLabel
            ref={lastNameRef}
            placeholder=" "
            id="last_name"
            children="last name"
          />
          <InputWithLabel
            ref={emailRef}
            placeholder=" "
            id="email"
            children="email"
          />
          <InputWithLabel
            ref={userRef}
            placeholder=" "
            id="user_role"
            children="user role"
          />
          <InputWithLabel
            ref={passwordRef}
            placeholder=" "
            id="password"
            children="password"
          />
          <InputWithLabel
            placeholder=" "
            id="Re-enter-password"
            children="re-enter password"
          />
          <Button
            onClick={onSubmit}
            mt="40px"
            width="100%"
            type={"primary"}
            children="register"
          />
        </Form>
      </MainBody>
      <Footer />
    </Container>
  );
};

export default Register;
