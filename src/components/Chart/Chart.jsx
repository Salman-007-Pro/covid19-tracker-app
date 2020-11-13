import React, { useContext } from "react";

//barChart
import BarChart from "./BarChart/BarChart";

//lineChart
import LineChart from "./LineChart/LineChart";

//contextApi
import { Context } from "../../globalContextApi/globalContextApi";

//scss
import "./Chart.scss";

function Chart() {
  const { countryDetials, selected, PakistanData } = useContext(Context);

  if (!countryDetials?.[selected]) {
    return null;
  }
  const { confirmed, deaths, recovered, country } = countryDetials[selected];
  return (
    <div className="chart-wrapper">
      {selected === "Pakistan" ? (
        <LineChart PakistanData={PakistanData} name={selected} />
      ) : (
        <BarChart
          confirmed={confirmed}
          recovered={recovered}
          deaths={deaths}
          name={country}
        />
      )}
    </div>
  );
}

export default Chart;
