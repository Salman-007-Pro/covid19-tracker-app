import React from "react";

//material ui
import Paper from "@material-ui/core/Paper";

//countup
import CountUp from "react-countup";

//scss
import "./PaperCard.scss";

function PaperCard({ data }) {
  const { heading, cases, date, description } = data;
  return (
    <Paper elevation={3}>
      <div className="paper-content-wrapper">
        <p className="paper-content-heading">{heading}</p>
        <h2 className="paper-content-count">
          <CountUp start={0} end={cases} duration={2.75} separator="," />
        </h2>
        <p className="paper-content-date">{date}</p>
        <p className="paper-content-active">{description}</p>
      </div>
    </Paper>
  );
}

export default PaperCard;
