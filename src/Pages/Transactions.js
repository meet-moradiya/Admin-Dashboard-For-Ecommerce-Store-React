import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";
import TableHOC from "../Components/TableHOC";

const arr = [
  {
    user: "Fannie",
    product: "Generic Bronze Chair",
    amount: "$833.53",
    discount: "$51.24",
    quantity: "7",
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Rex",
    product: "Small Bronze Gloves",
    amount: "$333.34",
    discount: "$164.18",
    quantity: "8",
    status: <span className="blue">Delivered</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Guadalupe",
    product: "Generic Bronze Chair",
    amount: "$827.07",
    discount: "$71.62",
    quantity: "3",
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Thomas",
    product: "Small Concrete Shirt",
    amount: "$638.68",
    discount: "$173.53",
    quantity: "7",
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Linda",
    product: "Practical Concrete Pizza",
    amount: "$22.26",
    discount: "$89.90",
    quantity: "5",
    status: <span className="blue">Delivered</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Hazel",
    product: "Ergonomic Granite Salad",
    amount: "$110.77",
    discount: "$196.81",
    quantity: "7",
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Maria",
    product: "Practical Fresh Shirt",
    amount: "$936.09",
    discount: "$154.56",
    quantity: "8",
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Kelly",
    product: "Awesome Rubber Shirt",
    amount: "$341.20",
    discount: "$130.34",
    quantity: "4",
    status: <span className="blue">Delivered</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Rebecca",
    product: "Ergonomic Wooden Gloves",
    amount: "$316.79",
    discount: "$101.06",
    quantity: "2",
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Cathy",
    product: "Sleek Metal Hat",
    amount: "$778.57",
    discount: "$133.76",
    quantity: "4",
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Marguerite",
    product: "Fantastic Soft Shirt",
    amount: "$28.05",
    discount: "$150.81",
    quantity: "7",
    status: <span className="blue">Delivered</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Patty",
    product: "Luxurious Metal Table",
    amount: "$899.80",
    discount: "$31.96",
    quantity: "6",
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Christy",
    product: "Practical Fresh Sausages",
    amount: "$507.91",
    discount: "$55.92",
    quantity: "1",
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Janie",
    product: "Modern Frozen Pants",
    amount: "$159.43",
    discount: "$129.91",
    quantity: "1",
    status: <span className="blue">Delivered</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Lana",
    product: "Handmade Cotton Cheese",
    amount: "$764.44",
    discount: "$56.78",
    quantity: "7",
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Patty",
    product: "Luxurious Metal Table",
    amount: "$899.80",
    discount: "$31.96",
    quantity: "6",
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Christy",
    product: "Practical Fresh Sausages",
    amount: "$507.91",
    discount: "$55.92",
    quantity: "1",
    status: <span className="blue">Delivered</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Janie",
    product: "Modern Frozen Pants",
    amount: "$159.43",
    discount: "$129.91",
    quantity: "1",
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Lana",
    product: "Handmade Cotton Cheese",
    amount: "$764.44",
    discount: "$56.78",
    quantity: "7",
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Kyle",
    product: "Modern Steel Table",
    amount: "$211.54",
    discount: "$187.47",
    quantity: "9",
    status: <span className="blue">Delivered</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Ray",
    product: "Small Frozen Shoes",
    amount: "$611.07",
    discount: "$139.81",
    quantity: "1",
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Ebony",
    product: "Elegant Frozen Keyboard",
    amount: "$885.44",
    discount: "$15.51",
    quantity: "6",
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Denise",
    product: "Gorgeous Rubber Table",
    amount: "$40.97",
    discount: "$27.62",
    quantity: "7",
    status: <span className="blue">Delivered</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
  {
    user: "Milton",
    product: "Unbranded Fresh Chicken",
    amount: "$260.23",
    discount: "$37.49",
    quantity: "8",
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transactions/hjasfdjk"}>Manage</Link>,
  },
];

const columns = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Product",
    accessor: "product",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

function Transactions() {
  const data = arr;
  const Table = TableHOC(columns, data, "orderBox", "Orders", true, 8);

  return (
    <div className="adminContainer">
      <div className="sideNavBar">
        <AdminSidebar />
      </div>
      <main className="dashboard">
        <div
          id="mainlogo"
          style={{
            display: "none",
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "700",
          }}
        >
          Logo.
        </div>
        <div className="orderContainer">{Table()}</div>
      </main>
    </div>
  );
}

export default Transactions;
