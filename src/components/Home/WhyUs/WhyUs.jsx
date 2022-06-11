import React from "react";
import {
  Calculator,
  Container,
  Map,
  Properties,
  Reasons,
  Trust,
} from "./WhyUsStyle";

const WhyUs = () => {
  return (
    <Container>
      <h1 className="title">Why Choose Us?</h1>
      <p className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Reasons>
        <div>
          <Trust />
          <h2 className="cardTitle">Trusted By Thousands</h2>
          <p className="subtitle">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
        </div>
        <div>
          <Properties />
          <h2 className="cardTitle">Wide Renge Of Properties</h2>
          <p className="subtitle">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
        </div>
        <div>
          <Calculator />
          <h2 className="cardTitle">Financing Made Easy</h2>
          <p className="subtitle">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
        </div>
        <div>
          <Map />
          <h2 className="cardTitle">See Neighborhoods</h2>
          <p className="subtitle">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </p>
        </div>
      </Reasons>
    </Container>
  );
};

export default WhyUs;
