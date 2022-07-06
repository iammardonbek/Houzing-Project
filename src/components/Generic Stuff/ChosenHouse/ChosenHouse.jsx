import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Body, Container } from "./ChosenHouseStyle";

const { REACT_APP_BASE_LINK: url } = process.env;
const ChosenHouse = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useQuery(
    [],
    () => {
      return fetch(`${url}v1/houses/${id.replace(":", "")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res.data);
      },
    }
  );
  console.log(data);
  return (
    <Container>
      <Body>{}</Body>
    </Container>
  );
};

export default ChosenHouse;
