import React from "react";
import styled from "styled-components";
import { ReactComponent as StacklineLogo } from "../../assets/stackline_logo.svg";

export const Heading = (props) => {
  return (
    <HeadingDiv>
      <StacklineLogo />
    </HeadingDiv>
  );
};

Heading.defaultProps = {};

const HeadingDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;

  // box model
  background-color: rgb(5, 40, 73);
  padding: 25px;
  padding-bottom: 20px;
  height: 40px;
`;
