import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../Assets/arrowRight.svg";

export const Container = styled.div`
  background: var(--headerColor);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Top = styled.div`
  padding: 48px 20px 24px;
  max-width: 1180px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
  @media (max-width: 800px) {
    grid-template-columns: auto auto;
    justify-content: space-around;
    row-gap: 50px;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;
export const FooterColumns = styled.div`
  h2 {
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    margin-bottom: 32px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    color: white;
    text-transform: capitalize;
    max-width: 250px;
  }
  div {
    display: flex;
  }
  div :nth-child(1) {
    margin-right: 20px;
  }
  .lowercase {
    text-transform: lowercase;
  }
  span {
    width: 150px;
    display: flex;
    justify-content: space-between;
    a {
      padding: 10px;
      border-radius: 3px;
      :hover {
        background-color: #ffffff27;
      }
    }
  }
`;
export const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  width: 100%;
  display: flex;
  padding: 15px 20px;
  justify-content: center;
`;
export const Copyrights = styled.div`
  max-width: 1180px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  column-gap: 80px;
  row-gap: 25px;
  @media (max-width: 530px) {
    a {
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 530px) {
    grid-template-columns: auto;
    justify-content: center;
  }
  p {
    color: white;
    text-transform: capitalize;
    margin-bottom: 0;
    margin-right: 73px;
    max-width: 400px;
    @media (max-width: 800px) {
      margin-right: 10px;
    }
    @media (max-width: 530px) {
      text-align: center;
    }
  }
  > div {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }
`;
export const Director = styled(Arrow)`
  transform: rotate(270deg);
`;
