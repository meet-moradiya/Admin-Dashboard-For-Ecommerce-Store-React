import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import SsidChartRoundedIcon from "@mui/icons-material/SsidChartRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function AdminSidebar() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeHam, setActiveHam] = useState(window.innerWidth < 1200);
  const sidebarRef = useRef(null);

  const resizeHandler = () => {
    setActiveHam(window.innerWidth < 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }

    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <>
      {activeHam && (
        <button id="hamburger" onClick={() => setShowSidebar(true)}>
          <MenuRoundedIcon
            style={{
              fontSize: "4rem",
            }}
          />
        </button>
      )}
      <aside
        ref={sidebarRef}
        style={
          activeHam
            ? {
                width: "25rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showSidebar ? "0" : "-25rem",
                opacity: showSidebar ? "1" : "0",
                transition: "all 0.3s ease-in-out",
              }
            : {}
        }
      >
        <h2
          id="asideLogo"
          style={{
            display: "inline-block",
          }}
        >
          Logo.
        </h2>
        <span
          className="closeBtn"
          style={{
            placeItems: "center",
            position: "absolute",
            right: "2.5rem",
            top: "1rem",
            display: "none",
          }}
          onClick={() => setShowSidebar(false)}
        >
          <CloseRoundedIcon
            style={{
              fontSize: "4rem",
              color: "#343a40",
            }}
          />
        </span>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/dashboard") ? "#e2eafc" : "white",
              }}
            >
              <DashboardRoundedIcon
                style={{
                  color: "#343a40",
                  fontSize: "2.5rem",
                }}
              />
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/products") ? "#e2eafc" : "white",
              }}
            >
              <Inventory2OutlinedIcon
                style={{
                  color: "#343a40",
                  fontSize: "2.5rem",
                }}
              />
              <Link to="/admin/products">Products</Link>
            </li>
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/customers") ? "#e2eafc" : "white",
              }}
            >
              <GroupRoundedIcon
                style={{
                  color: "#343a40",
                  fontSize: "2.5rem",
                }}
              />
              <Link to="/admin/customers">Customers</Link>
            </li>
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/transactions") ? "#e2eafc" : "white",
              }}
            >
              <AccountBalanceRoundedIcon
                style={{
                  color: "#343a40",
                  fontSize: "2.5rem",
                }}
              />
              <Link to="/admin/transactions">Transactions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>Charts</h5>
          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/charts/bar") ? "#e2eafc" : "white",
              }}
            >
              <BarChartRoundedIcon
                style={{
                  color: "#343a40",
                  fontSize: "2.5rem",
                }}
              />
              <Link to="/admin/charts/bar">Bar</Link>
            </li>
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/charts/pie") ? "#e2eafc" : "white",
              }}
            >
              <DonutLargeRoundedIcon
                style={{
                  color: "#343a40",
                  fontSize: "2.5rem",
                }}
              />
              <Link to="/admin/charts/pie">Pie</Link>
            </li>
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/charts/line") ? "#e2eafc" : "white",
              }}
            >
              <SsidChartRoundedIcon
                style={{
                  color: "#343a40",
                  fontSize: "2.5rem",
                }}
              />
              <Link to="/admin/charts/line">Line</Link>
            </li>
          </ul>
        </div>

        <div>
          <h5>apps</h5>
          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/admin/apps/coupon-generator") ? "#e2eafc" : "white",
              }}
            >
              <LocalOfferRoundedIcon
                style={{
                  color: "#343a40",
                  fontSize: "2.5rem",
                }}
              />
              <Link to="/admin/apps/coupon-generator">Coupon</Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default AdminSidebar;
