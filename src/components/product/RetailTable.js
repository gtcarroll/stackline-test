import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { MaterialContainer } from "../common";

export const RetailTable = (props) => {
  //   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //     useTable({
  //       // props.columns,
  //       // props.data,
  //     });

  return (
    <MaterialContainer>
      <TableStyles>table</TableStyles>
    </MaterialContainer>
  );
};

const TableStyles = styled.div`
  table {
    th {
    }
    tr {
    }
    td {
    }
  }
`;
