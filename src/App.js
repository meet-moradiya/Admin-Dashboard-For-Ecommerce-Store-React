import "./Styles/app.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Dashboard,
  Customers,
  Products,
  Transactions,
  NewProduct,
  ManageProduct,
  ManageTransaction,
  BarCharts,
  PieCharts,
  LineCharts,
  Coupon,
} from "./Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                fontSize: "2rem",
                margin: "5rem",
                textAlign: "center",
              }}
            >
              <Link
                to={"/admin/dashboard"}
                style={{
                  textDecoration: "none",
                  border: "2px solid #131313",
                  padding: "1rem",
                  borderRadius: "20px",
                }}
              >
                Go to the Dashboard
              </Link>
            </div>
          }
        />

        {/* main */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/transactions" element={<Transactions />} />

        {/* charts */}
        <Route path="/admin/charts/bar" element={<BarCharts />} />
        <Route path="/admin/charts/pie" element={<PieCharts />} />
        <Route path="/admin/charts/line" element={<LineCharts />} />

        {/* apps */}
        <Route path="/admin/apps/coupon-generator" element={<Coupon />} />

        {/* manage */}
        <Route path="/admin/products/add-product" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<ManageProduct />} />
        <Route path="/admin/transactions/:id" element={<ManageTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
