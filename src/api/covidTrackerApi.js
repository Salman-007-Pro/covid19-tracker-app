import axios from "axios";
const instance = axios.create({
  baseURL: "https://covid-19-data.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "602af4d5c0msh491c8199105a455p11b478jsn58feeee67982",
  },
});

export default instance;
