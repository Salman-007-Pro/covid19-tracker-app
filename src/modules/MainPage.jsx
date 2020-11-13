import React, { useEffect, useContext } from "react";

//components
import Container from "@material-ui/core/Container";
import Heading from "../components/Heading/Heading";
import Select from "../components/Select/Select";
import Chart from "../components/Chart/Chart";
import Footer from "../components/Footer/Footer";

//context
import { Context } from "../globalContextApi/globalContextApi";

function MainPage() {
  const { getAllCountries, getLatestTotals } = useContext(Context);
  useEffect(() => {
    const initialFetch = async () => {
      await getLatestTotals();
      await getAllCountries();
    };
    initialFetch();
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Heading />
        <Select />
        <Chart />
      </Container>
      <Footer />
    </>
  );
}

export default MainPage;
