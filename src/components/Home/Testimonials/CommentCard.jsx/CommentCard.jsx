import React from "react";
import { Bottom, Container, Top } from "./CommentCardStyle";
import noPic from "../../../../Assets/nophoto.png";

const CommentCard = ({ comment, width, pic, userName, profession }) => {
  return (
    <Container width={width}>
      <Top>
        <p className="subtitle">
          {comment
            ? comment
            : "“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “"}
        </p>
      </Top>
      <Bottom>
        <img src={pic ? pic : noPic} alt="user" />
        <h2 className="cardTitle">{userName ? userName : "Marvin McKinney"}</h2>
        <p className="subtitle">{profession ? profession : "Designer"}</p>
      </Bottom>
    </Container>
  );
};

export default CommentCard;
