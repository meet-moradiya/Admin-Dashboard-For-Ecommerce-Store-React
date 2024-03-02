import React from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import { LineChart } from "../../Components/Charts";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function LineCharts() {
  return (
    <div className="adminContainer">
      <div className="sideNavBar">
        <AdminSidebar />
      </div>
      <main className="chartContainer">
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
        <h1>Line Charts</h1>
        <section>
          <LineChart lineData={[207, 155, 399, 293, 125, 438, 367, 174, 456, 312, 189, 246]} title="Users" backColor="#573280" labels={months} />
          <h4>Active users</h4>
        </section>

        <section>
          <LineChart lineData={[41, 33, 47, 52, 62, 68, 56, 41, 40, 37, 50, 66]} title="Total Products" backColor="#721817" labels={months} />
          <h4>total products (SKU)</h4>
        </section>

        <section>
          <LineChart
            lineData={[40000, 35000, 45000, 55000, 60000, 50000, 45000, 40000, 30000, 40000, 65000, 70000]}
            title="Total Revenue"
            backColor="#0b6e4f"
            labels={months}
          />
          <h4>total revenue</h4>
        </section>

        <section>
          <LineChart
            lineData={[7500, 8000, 6500, 9000, 9500, 8500, 7000, 6000, 5500, 9500, 5000, 8500]}
            title="Discount Alloted"
            backColor="#2e1c2b"
            labels={months}
          />
          <h4>discount alloted</h4>
        </section>
      </main>
    </div>
  );
}

export default LineCharts;
