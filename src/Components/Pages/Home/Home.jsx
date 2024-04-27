import React, { useState } from "react";
import "./Home.css";
import Header from "../../Header/Header";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import AppDownd from "../../AppDownd/AppDownd";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory} />
      <AppDownd/>
    </div>
  );
};

export default Home;
