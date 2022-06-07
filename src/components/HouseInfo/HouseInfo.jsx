import React from "react";
import { HouseDetails } from "./HouseInfoStyle";
import { ReactComponent as Beds } from "../../Assets/beds.svg";
import { ReactComponent as Baths } from "../../Assets/baths.svg";
import { ReactComponent as Car } from "../../Assets/car.svg";
import { ReactComponent as Field } from "../../Assets/field.svg";

const HouseInfo = ({ width, height, color, stroke }) => {
  return (
    <HouseDetails color={color} width={width} height={height}>
      <span>
        <Beds style={{ stroke: stroke }} />
        <p>4 beds</p>
      </span>
      <span>
        <Baths style={{ stroke: stroke }} />
        <p>5 baths</p>
      </span>
      <span>
        <Car style={{ stroke: stroke }} />
        <p>1 garage</p>
      </span>
      <span>
        <Field style={{ stroke: stroke }} />
        <p>1200 Sq Ft</p>
      </span>
    </HouseDetails>
  );
};

export default HouseInfo;
