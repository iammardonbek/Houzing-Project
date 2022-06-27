import Footer from "../Generic Stuff/Footer/Footer";
import Button from "../Generic Stuff/Buttons/buttons";
import { useRef } from "react";
import { MainBody, Container, Form } from "./SignInStyle";
import InputWithLabel from "../Generic Stuff/InputWithLabel/InputWithLabel";
import { useEffect } from "react";

const SignIn = ({ autoFocus }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    if (autoFocus && emailRef.current) {
      emailRef.current.focus();
    }
  }, [autoFocus]);
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
          <Button mt="40px" width="100%" type={"primary"} children="login" />
        </Form>
      </MainBody>
      <Footer />
    </Container>
  );
};

export default SignIn;
