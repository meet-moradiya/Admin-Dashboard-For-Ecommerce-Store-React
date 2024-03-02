import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Doughnut, Pie, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend, PointElement, LineElement, Filler);

const months = ["January", "February", "March", "April", "May", "June", "July"];
export const BarChart = ({
  data_1 = [],
  data_2 = [],
  title_1 = "title_1",
  title_2 = "title_2",
  bgColor_1 = "#c8b8db",
  bgColor_2 = "#70587c",
  horizontal = false,
  labels = months,
}) => {
  const options = {
    indexAxis: horizontal ? "y" : "x",
    barThickness: "flex",
    barPercentage: 1,
    categoryPercentage: 0.65,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export const DoughnutChart = ({
  titles = ["data1", "data2", "data3", "data4", "data5", "data6"],
  chartData = [52, 73, 67, 15, 56, 29],
  bgColor = ["#36a2eb", "#ff6384", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40"],
  cutout,
  displayLegend = true,
  offset,
}) => {
  const modifiedBgColor = bgColor.map((color) => {
    return color + "a6";
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: displayLegend,
        position: "bottom",
        labels: {
          padding: 20,
        },
      },
    },
    cutout,
  };
  const data = {
    labels: titles,
    datasets: [
      {
        data: chartData,
        backgroundColor: modifiedBgColor,
        borderColor: bgColor,
        borderWidth: 1,
        offset,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
};

export const PieChart = ({
  titles = ["data1", "data2", "data3", "data4", "data5", "data6"],
  chartData = [52, 73, 67, 15, 56, 29],
  bgColor = ["#36a2eb", "#ff6384", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40"],
  offset,
}) => {
  const modifiedBgColor = bgColor.map((color) => {
    return color + "a6";
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: titles,
    datasets: [
      {
        data: chartData,
        backgroundColor: modifiedBgColor,
        borderColor: bgColor,
        borderWidth: 1,
        offset,
      },
    ],
  };

  return <Pie options={options} data={data} />;
};

export const LineChart = ({ lineData = [], title = "title", backColor = "#573280", labels = months }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: lineData,
        borderColor: backColor,
        backgroundColor: backColor + "66",
        fill: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
