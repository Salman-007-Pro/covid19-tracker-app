//main
import React, { createContext, useReducer } from "react";

//constants
import {
  GET_ALL_COUNTRIES_LISTED,
  GET_LATEST_TOTALS,
  GET_LATEST_COUNTRY_NAME,
  SET_GLOBAL_DATA,
  GET_PAKISTAN_ALL_DATA,
} from "../constants/actions";

//Actions
import * as Actions from "./Actions";

const rootReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_LISTED:
      return { ...state, allCountries: action.payload.allCountries };

    case GET_LATEST_TOTALS:
      return {
        ...state,
        countryDetials: {
          global: action.payload.global,
        },
      };

    case GET_LATEST_COUNTRY_NAME:
      return {
        ...state,
        selected: action.payload.countryData.country,
        countryDetials: {
          ...state.countryDetials,
          [action.payload.countryData.country]: action.payload.countryData,
        },
      };

    case SET_GLOBAL_DATA:
      return {
        ...state,
        selected: "global",
      };

    case GET_PAKISTAN_ALL_DATA:
      return {
        ...state,
        selected: "Pakistan",
        PakistanData: action.payload.PakistanData,
      };

    default:
      return { ...state };
  }
};
const createGlobalContext = (actions, reducers, initialState) => {
  const Context = createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, initialState);
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    const value = {
      ...state,
      ...boundActions,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };
  return { Context, Provider };
};

export const { Context, Provider } = createGlobalContext(Actions, rootReducer, {
  selected: "global",
});
