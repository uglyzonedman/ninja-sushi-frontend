"use client";
import React from "react";
import styles from "./Home.module.scss";
import HomeSlider from "./home-slider/HomeSlider";
import HomeProducts from "./home-products/HomeProducts";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/src/services/product.service";
const HomePage = () => {
  const {
    data: sushies,
    isLoading: isLoadingSushies,
    refetch: refetchSushies,
  } = useQuery({
    queryKey: ["get-all-sushies"],
    queryFn: () => ProductService.getAllProducts("sushi"),
  });
  const {
    data: rolls,
    isLoading: isLoadingRolls,
    refetch: refetchRolls,
  } = useQuery({
    queryKey: ["get-all-rolls"],
    queryFn: () => ProductService.getAllProducts("roll"),
  });

  const {
    data: sets,
    isLoading: isLoadingSets,
    refetch: refetchSets,
  } = useQuery({
    queryKey: ["get-all-sets"],
    queryFn: () => ProductService.getAllProducts("set"),
  });

  const {
    data: drinks,
    isLoading: isLoadingDrinks,
    refetch: refetchDrinks,
  } = useQuery({
    queryKey: ["get-all-drinks"],
    queryFn: () => ProductService.getAllProducts("drink"),
  });

  const {
    data: snacks,
    isLoading: isLoadingSnacks,
    refetch: refetchSnacks,
  } = useQuery({
    queryKey: ["get-all-snacks"],
    queryFn: () => ProductService.getAllProducts("snack"),
  });

  console.log(sushies?.items);
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <HomeSlider />
        <HomeProducts
          title="Суши"
          link="sushi"
          products={isLoadingSushies ? [] : sushies.items}
          refetch={refetchSushies}
        />
        <HomeProducts
          title="Ролы"
          link="roll"
          products={isLoadingRolls ? [] : rolls.items}
          refetch={refetchRolls}
        />
        <HomeProducts
          title="Сеты"
          link="set"
          products={isLoadingSets ? [] : sets.items}
          refetch={refetchSets}
        />
        <HomeProducts
          title="Закуски"
          link="snack"
          products={isLoadingSnacks ? [] : snacks.items}
          refetch={refetchSnacks}
        />
        <HomeProducts
          title="Напитки"
          link="drink"
          products={isLoadingDrinks ? [] : drinks.items}
          refetch={refetchDrinks}
        />
      </div>
    </div>
  );
};

export default HomePage;
