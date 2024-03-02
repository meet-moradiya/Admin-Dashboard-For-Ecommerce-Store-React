import React from "react";
import data from "../Assets/dummy.json";
import AdminSidebar from "../Components/AdminSidebar";
import { BarChart } from "../Components/Charts";
import DashboardTable from "../Components/DashboardTable";
// ############################################################################################
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

function Dashboard() {
  // random color generator function
  function randomBrightAndDarkColor() {
    var hue = Math.floor(Math.random() * 361);
    var saturation = Math.floor(Math.random() * 51) + 50;
    var brightness = Math.floor(Math.random() * 51) + 20;
    var hslColor = "hsl(" + hue + ", " + saturation + "%, " + brightness + "%";

    return hslColor;
  }

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
        <div className="bar">
          <ManageSearchRoundedIcon
            style={{
              color: "#343a40",
              fontSize: "3rem",
            }}
          />
          <input type="text" placeholder="Search" />
          <NotificationsNoneRoundedIcon
            style={{
              color: "#343a40",
              fontSize: "2.8rem",
              cursor: "pointer",
            }}
          />
          <PersonRoundedIcon
            style={{
              color: "#343a40",
              fontSize: "2.6rem",
              border: "2px solid #343a40",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </div>
        <section className="widgetContainer">
          {data.widget.map((item) => (
            <article className="widget" key={item.heading}>
              <div className="widgetInfo">
                <p>{item.heading}</p>
                {item.amount ? <h4>{`$${item.value}`}</h4> : <h4>{item.value}</h4>}
                {item.percent > 0 ? (
                  <span>
                    <TrendingUpRoundedIcon
                      style={{
                        color: "#06d6a0",
                        fontSize: "2rem",
                      }}
                    />{" "}
                    +{item.percent}%
                  </span>
                ) : (
                  <span>
                    <TrendingDownRoundedIcon
                      style={{
                        color: "#ef476f",
                        fontSize: "2rem",
                      }}
                    />{" "}
                    {item.percent}%
                  </span>
                )}
              </div>
              <div
                className="widgetCircle"
                style={{
                  background: `
                  conic-gradient(${item.color} ${(Math.abs(item.percent) / 100) * 360}deg, rgb(255,255,255) 0)
                  `,
                }}
              >
                <span color={item.color}>{item.percent}%</span>
              </div>
            </article>
          ))}
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h4>Revenue & Transactions</h4>
            <BarChart
              data_1={[300, 234, 546, 122, 213, 352, 521]}
              data_2={[652, 789, 156, 456, 751, 954, 458]}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1="#48cae4"
              bgColor_2="#0077b6"
            />
          </div>
        </section>
        <section className="categoriesChart">
          <h4>Categories</h4>
          <div className="flexForCategoryChart">
            {data.categories.map((item) => (
              <div className="categoryItems" key={item.heading}>
                <h4>{item.heading}</h4>
                <div className="bgDiv">
                  <div
                    style={{
                      backgroundColor: randomBrightAndDarkColor(),
                      width: `${item.value}%`,
                    }}
                  ></div>
                </div>
                <span>{`${item.value}%`}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="transactionContainer">
          <div className="transactionChart">
            <DashboardTable data={data.transactions} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
