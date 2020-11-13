import React, { useContext, useState } from "react";
import moment from "moment";

//material ui
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Selector from "@material-ui/core/Select";

//paperCard
import PaperCard from "./PaperCard/PaperCard";

//contextApi
import { Context } from "../../globalContextApi/globalContextApi";

//scss
import "./Select.scss";

function Select() {
  const {
    allCountries,
    countryDetials,
    getCountryName,
    selected,
    setGlobal,
    getPakistanAllData,
  } = useContext(Context);
  const [country, setCountry] = useState("global");
  const classes = useStyles();

  const countryChangeHandle = (event) => {
    const name = event.target.value;
    setCountry(name);
    if (name === "Pakistan") {
      getPakistanAllData();
      getCountryName(name);
    } else if (name !== "global") getCountryName(name);
    else setGlobal();
  };

  if (!countryDetials?.[selected]) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
  const { confirmed, deaths, lastUpdate, recovered } = countryDetials[selected];
  return (
    <div className="selector-wrapper">
      <h1 className="selector-heading">{selected}</h1>
      <div className={classes.root}>
        <PaperCard
          data={{
            heading: "infected",
            cases: confirmed,
            date: moment(lastUpdate).format("ddd MMM do YYYY"),
            description: "Number of active cases from COVID-19.",
          }}
        />
        <PaperCard
          data={{
            heading: "recovered",
            cases: recovered,
            date: moment(lastUpdate).format("ddd MMM do YYYY"),
            description: "Number of recoveries from COVID-19.",
          }}
        />
        <PaperCard
          data={{
            heading: "deaths",
            cases: deaths,
            date: moment(lastUpdate).format("ddd MMM do YYYY"),
            description: "Number of deaths caused by COVID-19.",
          }}
        />
      </div>
      <div className="selector-country-wrapper">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="selector-country" style={{ fontSize: "1.8rem" }}>
            Country
          </InputLabel>
          <Selector
            native
            value={country}
            onChange={countryChangeHandle}
            className="selector-country"
            inputProps={{
              name: "Country",
              id: "selector-country",
            }}
          >
            <option value="global">Global</option>
            {allCountries?.map((el, index) => (
              <option value={el.name} key={index}>
                {el.name}
              </option>
            ))}
          </Selector>
        </FormControl>
      </div>
    </div>
  );
}

export default Select;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *:nth-child(1)": {
      borderBottom: "10px solid #7f7fff",
    },
    "& > *:nth-child(2)": {
      borderBottom: "10px solid #7fff7f",
    },
    "& > *:nth-child(3)": {
      borderBottom: "10px solid #ff7f7f",
    },
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(28),
      height: theme.spacing(24),
      display: "flex",
      justifyContent: "center",
    },
  },
  formControl: {
    minWidth: "100%",
  },
}));
