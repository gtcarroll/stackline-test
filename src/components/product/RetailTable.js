import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { MaterialContainer } from "../common";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <TableContainer {...getTableProps()}>
      <thead>
        {headerGroups.splice(1).map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  // box model
  width: 100%;
`;

export const RetailTable = (props) => {
  const columns = [
    {
      Header: "false",
      columns: [
        {
          Header: "WEEK ENDING",
          accessor: "weekEnding",
        },
        {
          Header: "RETAIL SALES",
          accessor: "retailSales",
        },
        {
          Header: "WHOLESALE SALES",
          accessor: "wholesaleSales",
        },
        {
          Header: "UNITS SOLD",
          accessor: "unitsSold",
        },
        {
          Header: "RETAILER MARGIN",
          accessor: "retailerMargin",
        },
      ],
    },
  ];

  return (
    <MaterialContainer padding={"25px 0"}>
      <TableStyles>
        <Table columns={columns} data={props.data} />
      </TableStyles>
    </MaterialContainer>
  );
};

const TableStyles = styled.div`
  // box model
  width: 100%;

  // typography
  text-align: right;

  table {
    th {
      color: #525c6b;
      border-bottom: 1px solid rgb(234, 237, 243);
      padding: 25px 15px;
      padding-top: 0px;
    }
    tr {
      color: #a1aebf;
    }
    td {
      border-bottom: 1px solid rgb(234, 237, 243);
      padding: 15px 15px;
    }
  }
`;
