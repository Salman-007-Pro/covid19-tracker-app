import React from "react";

//bar
import { Bar } from "react-chartjs-2";

function BarChart({ confirmed, recovered, deaths, name }) {
  const data = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        backgroundColor: [
          "rgb(127,127,255,0.6)",
          "rgb(127,255,127,0.6)",
          "rgb(255,127,127,0.6)",
        ],
        borderColor: [
          "rgb(127,127,255,1)",
          "rgb(127,255,127,1)",
          "rgb(255,127,127,1)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgb(127,127,255,0.9)",
          "rgb(127,255,127,0.9)",
          "rgb(255,127,127,0.9)",
        ],
        hoverBorderColor: [
          "rgb(127,127,255,1)",
          "rgb(127,255,127,1)",
          "rgb(255,127,127,1)",
        ],
        data: [confirmed, recovered, deaths],
      },
    ],
  };
  return (
    <Bar
      data={data}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `Current state in ${name ? name : "Global"}`,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
}

export default BarChart;
