import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Header, Nav, LogoLink } from "../../../style";
import { NavbarDetails } from "../../../utils/Details";
import Logo from "../../../Assets/logo.svg";
import Button from "../Buttons/buttons";

export const Navbar = () => {
  return (
    <>
      <Header>
        <div>
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
          <Link to="Login">
            <Button width="120px" children="Login" />
          </Link>
        </div>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
