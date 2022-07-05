import styled from "styled-components";
import { Link } from "react-router-dom";

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
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  > div {
    display: grid;
    gap: 100px;
    grid-template-columns: auto minmax(100px, 333px) auto;
    justify-content: space-between;
    align-items: center;
    max-width: 1180px;
    width: 100%;
    height: 64px;
    padding: 10px 20px;
    @media (max-width: 776px) {
      grid-template-columns: auto auto auto;
      gap: 0;
    }
    .logButton {
      @media (max-width: 776px) {
        display: none;
      }
    }
    .none {
      @media (max-width: 776px) {
        display: block;
      }
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 776px) {
    position: fixed;
    top: 64px;
    left: -100%;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    z-index: 99;
    flex-direction: column;
    gap: 20px;
    background-color: var(--headerColor);
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
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
export const Dropdown = styled.div`
  width: 200px;
  padding: 20px;
  background-color: var(--headerColor);
  position: absolute;
  box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  top: 43px;
  right: 0px;
  a {
    color: white;
  }
`;
