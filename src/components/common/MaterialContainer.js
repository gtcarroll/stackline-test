import React from "react";
import styled from "styled-components";

export const MaterialContainer = (props) => {
  return (
    <MaterialContainerDiv
      style={{ minWidth: props.width, maxWidth: props.width }}
    >
      {props.children}
    </MaterialContainerDiv>
  );
};

MaterialContainer.defaultProps = {
  width: "100%",
};

const MaterialContainerDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  align-items: center;

  // box model
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  // typography
  text-align: center;
`;
