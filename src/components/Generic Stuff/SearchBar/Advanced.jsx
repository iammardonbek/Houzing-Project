import React from "react";
import { Advanced, AdvancedInputs, AdvancedTrigger } from "../../../style";
import GenericInput from "../Input/GenericInput";
import Button from "../Buttons/buttons";

export const advancedSearch = (
  <Advanced>
    <Advanced.Title>address</Advanced.Title>
    <AdvancedInputs>
      <GenericInput placeholder="Country" />
      <GenericInput placeholder="Region" />
      <GenericInput placeholder="City" />
      <GenericInput placeholder="Zip code" />
    </AdvancedInputs>
    <Advanced.Title>apartment info</Advanced.Title>
    <AdvancedInputs>
      <GenericInput placeholder="Zip code" />
      <GenericInput placeholder="Size" />
      <GenericInput placeholder="Sort" />
    </AdvancedInputs>
    <Advanced.Title>price</Advanced.Title>
    <AdvancedInputs>
      <GenericInput placeholder="Min price" />
      <GenericInput placeholder="Max price" />
    </AdvancedInputs>
    <AdvancedTrigger>
      <Button width="130px" type="cancel">
        Cancel
      </Button>
      <Button width="130px" type="primary">
        Submit
      </Button>
    </AdvancedTrigger>
  </Advanced>
);
