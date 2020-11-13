import React from "react";

//line
import { Line } from "react-chartjs-2";

function LineChart({ PakistanData, name }) {
  if (!PakistanData) {
    return null;
  }
  const data = {
    labels: PakistanData.map((el) => el.date).reverse(),
    datasets: [
      {
        label: "Infected",
        borderColor: "#7f7fff",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        fill: true,
        data: PakistanData.map((el) => el.confirmed).reverse(),
      },
      {
        label: "Recovered",
        borderColor: "green",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        fill: true,
        data: PakistanData.map((el) => el.recovered).reverse(),
      },
      {
        label: "Deaths",
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        fill: true,
        data: PakistanData.map((el) => el.deaths).reverse(),
      },
    ],
  };
  return (
    <Line
      data={data}
      options={{
        title: { display: true, text: `Current state in ${name}` },
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

export default LineChart;
