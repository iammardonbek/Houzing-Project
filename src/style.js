import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 10px;
  }
`;
export const Header = styled.div`
  background-color: var(--headerColor);
  justify-content: center;
  display: flex;
  /* height: 64px; */
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    width: 100%;
    padding: 10px 20px;

    > .Login {
      color: white;
      text-decoration: none;
      border: 1px solid white;
      padding: 12px 40px;
      font-size: 14px;
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 32%;
  a {
    color: white;
    text-transform: capitalize;
    text-decoration: none;
    &.active {
      color: aqua;
    }
  }
`;
export const SearchBarContainer = styled.div`
  justify-content: center;
  display: flex;
  span {
    display: flex;
    border: 1px solid #e6e9ec;
    align-items: center;
    padding-left: 15px;
    width: 100%;
    flex: 1;
  }
  > div {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    padding: 10px 20px;
    p {
      margin-left: 8px;
    }
  }
`;
export const SearchInput = styled.input`
  padding: 12px;
  border: none;
  outline: none;
  width: 100%;
`;
