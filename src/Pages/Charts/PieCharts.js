import WcIcon from "@mui/icons-material/Wc";
import React from "react";
import data from "../../Assets/dummy.json";
import AdminSidebar from "../../Components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../Components/Charts";

function PieCharts() {
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
        <h1>Pie & Dougnut Charts</h1>
        <section>
          <div>
            <PieChart
              titles={["Processing", "Shipped", "Delivered"]}
              chartData={[42, 28, 36]}
              bgColor={["#FF3131", "#0FFF50", "#1F51FF"]}
              offset={[0, 0, 40]}
            />
            <h4>Order fulfillment ratio</h4>
          </div>
        </section>

        <section>
          <div>
            <DoughnutChart
              titles={data.categories.slice(0, 10).map((title) => title.heading)}
              chartData={data.categories.slice(0, 10).map((title) => title.value)}
              offset={[25, 30, 40, 30, 35, 40, 30, 35, 25, 30]}
              displayLegend={false}
            />

            <h4>product categories ratio</h4>
          </div>
        </section>

        <section>
          <div>
            <DoughnutChart titles={["In Stock", "Out of Stock"]} chartData={[37, 13]} bgColor={["#7ae582", "#004e64"]} offset={[20]} cutout={"70%"} />
            <h4>Stock availability</h4>
          </div>
        </section>

        <section>
          <div>
            <DoughnutChart
              titles={["Product Revenue", "Discounts", "Advertising Expenses", "Production Costs", "Distribution Costs", "Profit"]}
              chartData={[1500000, 50000, 75000, 600000, 100000, 520000]}
              bgColor={["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#8c564b", "#e377c2"]}
              cutout={"60%"}
              offset={[0, 0, 0, 0, 0, 50]}
              displayLegend={false}
            />
            <h4>revenue distribution</h4>
          </div>
        </section>

        <section>
          <div>
            <PieChart
              titles={["0-18", "19-30", "31-45", "46-60", "61+"]}
              chartData={[150, 300, 500, 400, 200]}
              bgColor={["#a9d6e5", "#468faf", "#014f86", "#013a63", "#012a4a"]}
            />
            <h4>users age group</h4>
          </div>
        </section>

        <section>
          <div className="doughnutChartComponent">
            <DoughnutChart titles={["Male", "Female"]} chartData={[69, 45]} displayLegend={true} cutout={"60%"} />
            <p>
              <WcIcon
                style={{
                  color: "#343a40",
                  fontSize: "3rem",
                }}
              />
            </p>
          </div>
          <h4>Gender Ratio</h4>
        </section>

        <section>
          <div>
            <DoughnutChart titles={["Admin", "Customers"]} chartData={[3, 29]} bgColor={["#9d4edd", "#80ed99"]} offset={[30]} cutout={"60%"} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default PieCharts;
