import React from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import { MaterialContainer } from "../common";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const headerGroup = headerGroups[1];
  return (
    <TableContainer {...getTableProps()}>
      <thead>
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render("Header")}
              {/* Add a sort direction indicator */}
              <span>
                {column.isSorted
                  ? column.isSortedDesc
                    ? " ▼ "
                    : " ▲ "
                  : " - "}
              </span>
            </th>
          ))}
        </tr>
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
      padding: 25px 0px 25px 25px;
      padding-top: 0px;

      span {
        display: inline-block;
        width: 15px;
        padding-right: 10px;
        color: #a1aebf;
        font-family: monospace;
      }
    }
    tr {
      color: #a1aebf;
    }
    td {
      border-bottom: 1px solid rgb(234, 237, 243);
      padding: 15px 30px 15px 15px;
    }
  }
`;
