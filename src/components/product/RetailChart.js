import React from "react";
import styled from "styled-components";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { MaterialContainer } from "../common";

export const RetailChart = (props) => {
  return (
    <MaterialContainer padding={"25px 0"}>
      <TableHeader>Retail Sales</TableHeader>
      <ResponsiveContainer width={"95%"} height={400}>
        <LineChart data={props.data}>
          <Line
            name="retail sales"
            dataKey="retailSales"
            stroke="#44A7F6"
            type="monotone"
            dot={false}
          />
          <Line
            name="wholesale sales"
            dataKey="wholesaleSales"
            stroke="#9AA5BF"
            type="monotone"
            dot={false}
          />
          <XAxis dataKey="weekEnding" hide={true} />
          <YAxis width={65} hide={true} />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </MaterialContainer>
  );
};

const TableHeader = styled.h3`
  //box model
  width: 95%;

  // typography
  font-weight: 100;
  text-align: left;
`;
