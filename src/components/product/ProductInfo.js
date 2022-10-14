import React from "react";
import styled from "styled-components";
import { MaterialContainer } from "../common";

export const ProductInfo = (props) => {
  const tagItems = props.tags.map((tag, i) => {
    return <TagItem key={i}>{tag}</TagItem>;
  });

  return (
    <MaterialContainer width={"375px"}>
      <Image src={props.image} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <TagsList>{tagItems}</TagsList>
    </MaterialContainer>
  );
};

const Image = styled.img`
  // box model
  margin: 20px auto 10px;
  width: 200px;
`;

const Title = styled.h2`
  // typography
  font-weight: bold;
`;

const Subtitle = styled.p`
  // box model
  padding: 5px 60px 20px;

  // typography
  color: rgb(167, 176, 191);
`;

const TagsList = styled.ul`
  // flexbox
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 9px;

  // box model
  padding: 15px 25px;
  border-top: 1px solid rgb(234, 237, 243);
  border-bottom: 1px solid rgb(234, 237, 243);

  // typography
  color: rgb(71, 81, 102);
  list-style-type: none;
`;

const TagItem = styled.li`
  // box model
  border: 1px solid rgb(234, 237, 243);
  border-radius: 4px;
  padding: 5px 20px;
`;
