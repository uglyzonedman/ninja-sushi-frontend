import React from "react";
import styles from "./Home.module.scss";
import HomeSlider from "./home-slider/HomeSlider";
import HomeProducts from "./home-products/HomeProducts";
const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <HomeSlider />
        <HomeProducts />
      </div>
    </div>
  );
};

export default HomePage;
