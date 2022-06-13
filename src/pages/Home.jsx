import React from "react";
// COMPONENTS
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import Roomtype from "../components/RoomType/Roomtype";
import Cities from "../components/CitiesComp/Cities";
import Countryinfo from "../components/CountryInfos/Countryinfo";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HomeInfo />
      <Roomtype />
      <Cities />
      <Countryinfo />
      <Footer />
    </div>
  );
};

export default Home;
