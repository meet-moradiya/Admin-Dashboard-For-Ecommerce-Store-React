import TableHOC from "./TableHOC";

const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data = [] }) => {
  return TableHOC(columns, data, "transactionBox", "Top Transaction", true)();
};

export default DashboardTable;
