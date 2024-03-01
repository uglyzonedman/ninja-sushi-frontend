"use client";
import React from "react";
import bottle from "../../../assets/bottle.png";
import chilly from "../../../assets/chilly.png";
import fish from "../../../assets/fish.png";
import green from "../../../assets/green.png";
import styles from "./HomeProducts.module.scss";
import Link from "next/link";
import HomeProductsProduct from "./home-products-product/HomeProductsProduct";
const HomeProducts = () => {
  const categories = [
    "Все",
    "Классические",
    "Маки",
    "Драконы",
    "Запеченные",
    "Феликсы",
    "Сладкие",
  ];
  const types = [
    {
      id: 0,
      name: "Острые",
      photo: chilly,
    },
    {
      id: 1,
      name: "Вегетарианские",
      photo: bottle,
    },
    {
      id: 2,
      name: "Безлактозные",
      photo: green,
    },
  ];

  const products = [
    {
      id: 0,
      name: "Лосось",
      photo: fish,
    },
    {
      id: 1,
      name: "Угорь",
      photo: fish,
    },
    {
      id: 2,
      name: "Тунец",
      photo: fish,
    },
    {
      id: 3,
      name: "Куриное филе",
      photo: fish,
    },
  ];
  return (
    <div className={styles.products}>
      <div className={styles.products__header}>
        <Link
          href={`/products/rolls`}
          className={styles.products__header__title}
        >
          Продукт какой-то
        </Link>
        <button className={styles.products__header__view}>Смотреть все</button>
      </div>
      <div className={styles.products__content}>
        <HomeProductsProduct />
        <HomeProductsProduct />
        <HomeProductsProduct />
        <HomeProductsProduct />
        <HomeProductsProduct />
        <HomeProductsProduct />
        <HomeProductsProduct />
      </div>
    </div>
  );
};

export default HomeProducts;
