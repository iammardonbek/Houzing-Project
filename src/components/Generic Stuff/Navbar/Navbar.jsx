import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Header, Nav, LogoLink } from "./NavbarStyle";
import { NavbarDetails } from "../../../utils/Details";
import Logo from "../../../Assets/logo.svg";
import Button from "../Buttons/buttons";
import { ReactComponent as Login } from "../../../Assets/Login.svg";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <Header>
        <div>
          <div
            onClick={() => setMobileMenu(!mobileMenu)}
            className={mobileMenu ? "hamburger active" : "hamburger"}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <LogoLink to="/">
            <img src={Logo} alt="hello" />
            <h3>Houzing</h3>
          </LogoLink>
          <Nav>
            {NavbarDetails.map(({ id, title, path }) => (
              <NavLink key={id} to={path}>
                {title}
              </NavLink>
            ))}
          </Nav>
          {location.pathname !== "/Login" && (
            <Link className="logButton" to="Login">
              <Button width="120px" children="Login" />
            </Link>
          )}
          <Link className="none" to="Login">
            <Login />
          </Link>
        </div>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
