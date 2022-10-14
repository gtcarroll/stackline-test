import React from "react";
import styled from "styled-components";
import { Heading } from "./components/common";
import { Product } from "./components/product";

function App() {
  return (
    <AppDiv>
      <Heading />
      <Product />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  // box model
  background-color: rgb(246, 248, 250);
  min-height: 100vh;
  max-width: 100vw;

  // typography
  font-family: "Arial";
`;

export default App;
