import { chartsConfig } from "@/configs";

const ViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const likesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "likes",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const sharesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "shares",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};
// const sharesChart = {
//   ...shareskChart,
//   series: [
//     {
//       name: "Tasks",
//       data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
//     },
//   ],
// };

export const statisticsChartsData = [
  {
    color: "white",
    title: "Views",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    chart: ViewsChart,
  },
  {
    color: "white",
    title: "Likes",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: likesChart,
  },
  {
    color: "white",
    title: "Shares",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: sharesChart,
  },
];

export default statisticsChartsData;
