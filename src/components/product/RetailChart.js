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
    <MaterialContainer>
      <ResponsiveContainer width={"95%"} height={400}>
        <LineChart data={props.data}>
          <Line type="monotone" dataKey="retailSales" stroke="#44A7F6" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#9AA5BF" />
          <XAxis dataKey="weekEnding" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </MaterialContainer>
  );
};

RetailChart.defaultProps = {};
