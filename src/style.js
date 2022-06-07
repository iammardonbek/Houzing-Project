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
  justify-content: center;
  display: flex;
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
export const Advanced = styled.div``;
Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--headerColor);
  text-transform: capitalize;
`;
export const AdvancedInputs = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  column-gap: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
`;
export const AdvancedTrigger = styled.div`
  background-color: #f6f8f9;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 65%;
`;
