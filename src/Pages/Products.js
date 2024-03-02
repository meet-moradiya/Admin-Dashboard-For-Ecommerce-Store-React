import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";
import TableHOC from "../Components/TableHOC";

const arr = [
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="productImage"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    productID: "asdjvaew",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    productID: "jejfkods",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="productImage"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    productID: "asdjvaew",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    productID: "asdjvaew",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="productImage"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    productID: "jejfkods",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    productID: "jejfkods",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="productImage"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    productID: "jejfkods",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="productImage"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    productID: "jejfkods",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    productID: "jejfkods",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="productImage"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    productID: "jejfkods",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    productID: "jejfkods",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="productImage"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    productID: "jejfkods",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    productID: "jejfkods",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: (
      <img
        src={
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"
        }
        alt="productImage"
      />
    ),
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    productID: "jejfkods",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
  {
    photo: <img src={"https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"} alt="productImage" />,
    name: "Macbook",
    productID: "jejfkods",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
];

const columns = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Product ID",
    accessor: "productID",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
function Products() {
  const data = arr;
  const table = TableHOC(columns, data, "productBox", "Products", true, 5);
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
        <div className="productContainer">
          {table()}
          <Link to={"/admin/products/add-product"} className="addProductBtn" title="Add New Product">
            <ControlPointRoundedIcon
              style={{
                fontSize: "4rem",
                color: "#343a40",
              }}
            />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Products;
