import covidApi from "../../api/covidTrackerApi";
import axios from "axios";
import moment from "moment";

//constants
import {
  GET_ALL_COUNTRIES_LISTED,
  GET_LATEST_TOTALS,
  GET_LATEST_COUNTRY_NAME,
  SET_GLOBAL_DATA,
  GET_PAKISTAN_ALL_DATA,
} from "../../constants/actions";

const sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

export const getAllCountries = (dispatch) => {
  return async () => {
    try {
      sleep(1000);
      const response = await covidApi.get("/help/countries");
      dispatch(getAllCountriesData(response.data));
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};

const getAllCountriesData = (countries) => {
  return {
    type: GET_ALL_COUNTRIES_LISTED,
    payload: {
      allCountries: countries,
    },
  };
};

export const getLatestTotals = (dispatch) => {
  return async () => {
    try {
      const response = await covidApi.get("/totals");
      dispatch(getLatestTotalsData(response.data));
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};

const getLatestTotalsData = (globalTotal) => {
  return {
    type: GET_LATEST_TOTALS,
    payload: {
      global: globalTotal[0],
    },
  };
};

export const getCountryName = (dispatch) => {
  return async (name) => {
    try {
      const response = await covidApi.get(`/country`, { params: { name } });
      dispatch(getCountryNameData(response.data));
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};

const getCountryNameData = (countryData) => {
  return {
    type: GET_LATEST_COUNTRY_NAME,
    payload: {
      countryData: countryData[0],
    },
  };
};

export const getPakistanAllData = (dispatch) => {
  return async () => {
    try {
      const response = await axios.get(
        "https://api.covid19api.com/total/country/pakistan"
      );
      const data = response.data.map((el) => ({
        Active: el.Active,
        confirmed: el.Confirmed,
        country: el.Country,
        date: moment(el.Date).format("l"),
        deaths: el.Deaths,
        recovered: el.Recovered,
      }));
      dispatch(getPakistanAllDataData(data));
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};

const getPakistanAllDataData = (PakistanData) => {
  return {
    type: GET_PAKISTAN_ALL_DATA,
    payload: {
      PakistanData: PakistanData,
    },
  };
};

export const setGlobal = (dispatch) => {
  return async () => {
    dispatch(setGlobalData());
  };
};

const setGlobalData = () => {
  return {
    type: SET_GLOBAL_DATA,
  };
};
