import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Header, Nav, LogoLink, Dropdown } from "./NavbarStyle";
import { NavbarDetails } from "../../../utils/Details";
import Logo from "../../../Assets/logo.svg";
import Button from "../Buttons/buttons";
import { ReactComponent as Login } from "../../../Assets/Login.svg";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userLogo, setUserLogo] = useState(false);
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
          <Nav style={{ left: mobileMenu && "0" }}>
            {NavbarDetails.map(({ id, title, path }) => (
              <NavLink key={id} to={path}>
                {title}
              </NavLink>
            ))}
          </Nav>
          {localStorage.getItem("token") === null ? (
            location.pathname !== "/Login" && (
              <Link className="logButton" to="Login">
                <Button width="120px" children="Login" />
              </Link>
            )
          ) : (
            <div className="dropdown">
              <Login
                onClick={() => setUserLogo(!userLogo)}
                className="userLogo"
              />
              <Dropdown style={{ display: userLogo ? "block" : "none" }}>
                <Link to="Login">Login</Link>
              </Dropdown>
            </div>
          )}
        </div>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
