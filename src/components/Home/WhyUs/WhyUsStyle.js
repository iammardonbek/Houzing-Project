import styled from "styled-components";
import { ReactComponent as trust } from "../../../Assets/trust.svg";
import { ReactComponent as properties } from "../../../Assets/properties.svg";
import { ReactComponent as calculator } from "../../../Assets/calculator.svg";
import { ReactComponent as map } from "../../../Assets/map.svg";

export const Container = styled.div`
  background-color: #f5f7fc;
  padding: 48px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Reasons = styled.div`
  max-width: 1180px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 77px;
  @media (max-width: 1100px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 580px) {
    grid-template-columns: auto;
  }
  div {
    text-align: center;
    max-width: 300px;
    margin-top: 40px;
    h2 {
      margin-bottom: 8px;
    }
  }
`;
export const Trust = styled(trust)`
  margin-bottom: 24px;
`;
export const Properties = styled(properties)`
  margin-bottom: 24px;
`;
export const Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
export const Map = styled(map)`
  margin-bottom: 24px;
`;
