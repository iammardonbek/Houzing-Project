import React from "react";
import {
  Bottom,
  Container,
  Copyrights,
  FooterColumns,
  Top,
} from "./FooterStyle";
import BackToTop from "../BackToTop/BackToTop";

import { ReactComponent as LocateBranch } from "../../../Assets/LocateBranch.svg";
import { ReactComponent as Call } from "../../../Assets/Call.svg";
import { ReactComponent as Email } from "../../../Assets/Email.svg";
import { ReactComponent as Facebook } from "../../../Assets/Facebook.svg";
import { ReactComponent as Insta } from "../../../Assets/Insta.svg";
import { ReactComponent as Twitter } from "../../../Assets/Twitter.svg";
import { ReactComponent as Linked } from "../../../Assets/Linked.svg";
import { LogoLink } from "../Navbar/NavbarStyle";
import Logo from "../../../Assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Top>
        <FooterColumns>
          <h2>contact us</h2>
          <div>
            <LocateBranch />
            <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
          </div>
          <div>
            <Call />
            <p>+998 97 792 05 99</p>
          </div>
          <div>
            <Email />
            <p className="lowercase">mardonbek1999@gmail.com</p>
          </div>
          <span>
            <a target="blank" href="https://www.facebook.com/">
              <Facebook />
            </a>
            <a target="blank" href="https://www.twitter.com/">
              <Twitter />
            </a>
            <a target="blank" href="https://www.instagram.com/">
              <Insta />
            </a>
            <a target="blank" href="https://www.linkedin.com/">
              <Linked />
            </a>
          </span>
        </FooterColumns>
        <FooterColumns>
          <h2>discover</h2>
          <p>chicago</p>
          <p>los angeles</p>
          <p>miami</p>
          <p>new york</p>
        </FooterColumns>
        <FooterColumns>
          <h2>lists by category</h2>
          <p>apartments</p>
          <p>condos</p>
          <p>houses</p>
          <p>offices</p>
          <p>retail</p>
          <p>villas</p>
        </FooterColumns>
        <FooterColumns>
          <h2>about us</h2>
          <p>terms & condition</p>
          <p>support center</p>
          <p onClick={() => navigate("/contacts")}>contact us</p>
        </FooterColumns>
      </Top>
      <Bottom>
        <Copyrights>
          <LogoLink to="/">
            <img src={Logo} alt="hello" />
            <h3>Houzing</h3>
          </LogoLink>
          <div>
            <p>Copyright © 2021 CreativeLayers. All Right Reserved.</p>
          </div>
        </Copyrights>
      </Bottom>
      <BackToTop />
    </Container>
  );
};

export default Footer;
