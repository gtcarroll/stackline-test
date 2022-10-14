import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProductInfo } from "./ProductInfo";
import { RetailChart } from "./RetailChart";
import { RetailTable } from "./RetailTable";

export const Product = (props) => {
  const products = useSelector((state) => state.productsReducer.products);

  return (
    <ProductDiv>
      <ProductInfo {...products[0][0]} />
      <ColumnDiv>
        <RetailChart />
        <RetailTable />
      </ColumnDiv>
    </ProductDiv>
  );
};

Product.defaultProps = {};

const ProductDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: row;
  gap: 20px;

  // box model
  padding: 80px 20px;
`;

const ColumnDiv = styled.div`
  // flexbox
  display: flex;
  flex-direction: column;
  gap: 80px;

  // box model
  width: 100%;
`;
