import { Popover } from "antd";
import React from "react";
import SearchLogo from "../../../Assets/001-loupe.svg";
import homeInSearch from "../../../Assets/homeInSearch.svg";
import AdvancedLogo from "../../../Assets/setting-lines.svg";
import { SearchBarContainer, SearchButtons } from "../../../style";
import { Button } from "../Buttons/buttonStyle";
import GenericInput from "../Input/GenericInput";
import { Advanced, AdvancedInputs, AdvancedTrigger } from "../../../style";
import { useNavigate } from "react-router-dom";
import UseSearch from "../../Hooks/useSearch";
import UseReplace from "../../Hooks/useReplace";
import { useState } from "react";

export const Search = () => {
  const navigate = useNavigate();
  const query = UseSearch();
  const change = ({ target }) => {
    const { value, name } = target;
    navigate(`${UseReplace(value, name)}`);
  };

  const [visible, setVisible] = useState(false);
  const hide = () => {
    setVisible(false);
  };
  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>address</Advanced.Title>
      <AdvancedInputs>
        <GenericInput
          defaultValue={query.get("country")}
          onChange={change}
          name="country"
          placeholder="Country"
        />
        <GenericInput
          defaultValue={query.get("region")}
          onChange={change}
          name="region"
          placeholder="Region"
        />
        <GenericInput
          defaultValue={query.get("city")}
          onChange={change}
          name="city"
          placeholder="City"
        />
        <GenericInput
          defaultValue={query.get("zip_code")}
          onChange={change}
          name="zip_code"
          placeholder="Zip code"
        />
      </AdvancedInputs>
      <Advanced.Title>apartment info</Advanced.Title>
      <AdvancedInputs>
        <GenericInput
          defaultValue={query.get("address")}
          onChange={change}
          name="address"
          placeholder="Address"
        />
        <GenericInput
          defaultValue={query.get("house_name")}
          onChange={change}
          name="house_name"
          placeholder="House name"
        />
        <GenericInput
          defaultValue={query.get("rooms")}
          onChange={change}
          name="rooms"
          placeholder="Rooms"
        />
      </AdvancedInputs>
      <Advanced.Title>price</Advanced.Title>
      <AdvancedInputs>
        <GenericInput
          defaultValue={query.get("min_price")}
          onChange={change}
          name="min_price"
          placeholder="Min price"
        />
        <GenericInput
          defaultValue={query.get("max-price")}
          onChange={change}
          name="max_price"
          placeholder="Max price"
        />
      </AdvancedInputs>
      <AdvancedTrigger>
        <Button onClick={hide} width="130px" type="cancel">
          Cancel
        </Button>
        <Button width="130px" type="primary">
          Submit
        </Button>
      </AdvancedTrigger>
    </Advanced>
  );

  return (
    <SearchBarContainer>
      <div>
        <GenericInput
          onChange={change}
          className="generic-input"
          name="city"
          pl="8px"
          width="100%"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        >
          <img src={homeInSearch} alt="rasm" />
        </GenericInput>
        <SearchButtons>
          <Popover
            placement="bottomRight"
            trigger="click"
            content={advancedSearch}
            className="pop-over"
            visible={visible}
            onVisibleChange={handleVisibleChange}
          >
            <Button className="SearchBtn" type="secondary" width="130px">
              <img src={AdvancedLogo} alt="rasm" />
              <p>advanced</p>
            </Button>
          </Popover>
          <Button width="180px" type="primary">
            <img src={SearchLogo} alt="rasm" />
            <p>search</p>
          </Button>
        </SearchButtons>
      </div>
    </SearchBarContainer>
  );
};
