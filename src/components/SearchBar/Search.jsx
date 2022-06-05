import React from "react";
import SearchLogo from "../../Assets/001-loupe.svg";
import homeInSearch from "../../Assets/homeInSearch.svg";
import AdvancedLogo from "../../Assets/setting-lines.svg";
import { SearchBarContainer } from "../../style";
import { Button } from "../Buttons/buttonStyle";

export const Search = () => {
  return (
    <SearchBarContainer>
      <div>
        <GenericInput
          pl="8px"
          width="100%"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        >
          <img src={homeInSearch} alt="rasm" />
        </GenericInput>
        <Button ml="20px" mr="20px" type="secondary" width="130px">
          <img src={AdvancedLogo} alt="rasm" />
          <p>advanced</p>
        </Button>
        <Button width="180px" type="primary">
          <img src={SearchLogo} alt="rasm" />
          <p>search</p>
        </Button>
      </div>
    </SearchBarContainer>
  );
};
