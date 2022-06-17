import React from "react";
import FarmPic from "../../../Assets/Farm.png";
import Button from "../../Generic Stuff/Buttons/buttons";
import { Container, HouseInfo } from "./FarmhouseStyle";

const Farmhouse = () => {
  return (
    <Container>
      <img src={FarmPic} alt="rasm" />
      <HouseInfo>
        <h1>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </h1>
        <Button width="180px" type="primary" children="read more" />
      </HouseInfo>
    </Container>
  );
};

export default Farmhouse;
