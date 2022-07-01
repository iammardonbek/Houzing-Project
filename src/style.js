import styled from "styled-components";

import { ReactComponent as Car } from "./Assets/car.svg";
import { ReactComponent as Bed } from "./Assets/beds.svg";
import { ReactComponent as Bath } from "./Assets/baths.svg";
import { ReactComponent as Field } from "./Assets/field.svg";
import { ReactComponent as Arrow } from "./Assets/arrowRight.svg";

export const HouseSpecs = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    text-align: center;
  }
`;

export const Cars = styled(Car)`
  path {
    fill: ${({ fill }) => (fill ? fill : "white")};
  }
`;
export const Beds = styled(Bed)`
  path {
    fill: ${({ fill }) => (fill ? fill : "white")};
  }
`;
export const Baths = styled(Bath)`
  path {
    fill: ${({ fill }) => (fill ? fill : "white")};
  }
`;
export const Fields = styled(Field)`
  path {
    fill: ${({ fill }) => (fill ? fill : "white")};
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
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    justify-content: space-between;
    max-width: 1180px;
    width: 100%;
    padding: 10px 20px;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
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
export const SearchButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
`;
export const Director = styled(Arrow)`
  transform: rotate(270deg);
`;
