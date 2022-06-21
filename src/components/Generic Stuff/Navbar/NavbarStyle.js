import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BurgerNav } from "../../../Assets/burgerNav.svg";

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 10px;
    color: white;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 900;
  }
`;
export const Header = styled.div`
  background-color: var(--headerColor);
  display: flex;
  justify-content: center;
  div {
    display: grid;
    gap: 100px;
    grid-template-columns: auto minmax(100px, 333px) auto;
    justify-content: space-between;
    align-items: center;
    max-width: 1180px;
    width: 100%;
    padding: 10px 20px;
    @media (max-width: 600px) {
      grid-template-columns: auto auto auto;
    }
    .logButton {
      @media (max-width: 700px) {
        display: none;
      }
    }
    .none {
      display: none;
      @media (max-width: 700px) {
        display: block;
      }
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    display: none;
  }
  a {
    color: white;
    text-transform: capitalize;
    text-decoration: none;
    &.active {
      color: aqua;
    }
  }
`;
export const Burger = styled(BurgerNav)`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
