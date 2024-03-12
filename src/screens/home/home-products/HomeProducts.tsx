"use client";
import React from "react";
import bottle from "../../../assets/bottle.png";
import chilly from "../../../assets/chilly.png";
import fish from "../../../assets/fish.png";
import green from "../../../assets/green.png";
import styles from "./HomeProducts.module.scss";
import Link from "next/link";
import HomeProductsProduct from "./home-products-product/HomeProductsProduct";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/src/services/product.service";
import { IProductsPage } from "@/src/interfaces/product.interface";
const HomeProducts = ({ title, products, link, refetch }: IProductsPage) => {
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

  const productsList = [
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
          href={`/products/${link}`}
          className={styles.products__header__title}
        >
          {title}
        </Link>
        <button className={styles.products__header__view}>Смотреть все</button>
      </div>
      <div className={styles.products__content}>
        {products.map((product) => (
          <HomeProductsProduct
            createdAt={product.createdAt}
            description={product.description}
            id={product.id}
            name={product.name}
            photoPath={product.photoPath}
            price={product.price}
            type={product.type}
            updatedAt={product.updatedAt}
            volume={product.volume}
            weight={product.weight}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
