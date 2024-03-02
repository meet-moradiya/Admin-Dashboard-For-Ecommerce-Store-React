import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import { usePagination, useSortBy, useTable } from "react-table";

function TableHOC(columns, data, containerClassname, heading, showPagination = false, pageRow = 5) {
  return function HOC() {
    const options = {
      columns,
      data,
      initialState: {
        pageSize: pageRow,
      },
    };

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      pageCount,
      state: { pageIndex },
      previousPage,
      canNextPage,
      canPreviousPage,
    } = useTable(options, useSortBy, usePagination);

    return (
      <>
        <div className={containerClassname}>
          <h4 className="heading">{heading}</h4>
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th
                      {...column.getHeaderProps(columnIndex > 0 ? column.getSortByToggleProps() : {})}
                      style={{
                        cursor: columnIndex > 0 ? "pointer" : "default",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        {column.render("Header")}
                        {column.isSorted && (
                          <>
                            {column.isSortedDesc ? (
                              <ArrowDropUpRoundedIcon
                                style={{
                                  color: "#343a40",
                                  fontSize: "3rem",
                                }}
                              />
                            ) : (
                              <ArrowDropDownRoundedIcon
                                style={{
                                  color: "#343a40",
                                  fontSize: "3rem",
                                }}
                              />
                            )}
                          </>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* ##################### Pagination #######################  */}
          {showPagination && (
            <div
              className="table-pagination"
              style={{
                display: "flex",
                maxWidth: "250px",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "1.6rem auto",
              }}
            >
              <button disabled={!canPreviousPage} onClick={previousPage}>
                Prev
              </button>
              <span
                style={{
                  color: "#343a40",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >{`${pageIndex + 1} of ${pageCount}`}</span>
              <button disabled={!canNextPage} onClick={nextPage}>
                Next
              </button>
            </div>
          )}
          {/* ############################################  */}
        </div>
      </>
    );
  };
}

export default TableHOC;
