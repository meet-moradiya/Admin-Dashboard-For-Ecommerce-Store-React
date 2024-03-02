import React from "react";
import { BarChart } from "../../Components/Charts";
import AdminSidebar from "../../Components/AdminSidebar";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function BarCharts() {
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
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[207, 155, 399, 293, 125, 438, 367, 174, 456, 312, 189, 246]}
            data_2={[428, 263, 195, 341, 402, 112, 178, 415, 491, 299, 184, 398]}
            title_1="Products"
            title_2="Users"
            bgColor_1="#7a9e7e"
            bgColor_2="#31493c"
            labels={months}
          />
          <h4>top selling products & top customers</h4>
        </section>
        <section>
          <BarChart
            data_1={[164, 321, 462, 289, 137, 204, 418, 367, 127, 451, 275, 104]}
            data_2={[]}
            title_1="Orders"
            title_2=""
            bgColor_1="#348aa7"
            bgColor_2=""
            labels={months}
            horizontal={true}
          />
          <h4>Orders throughout the years</h4>
        </section>
      </main>
    </div>
  );
}

export default BarCharts;
