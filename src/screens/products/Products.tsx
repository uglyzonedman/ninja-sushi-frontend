"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Products.module.scss";
import bottle from "../../assets/bottle.png";
import chilly from "../../assets/chilly.png";
import fish from "../../assets/fish.png";
import green from "../../assets/green.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ProductService } from "@/src/services/product.service";
import { useQuery } from "@tanstack/react-query";
import Product from "./product/Product";
import { IProduct } from "@/src/interfaces/product.interface";
import axios from "axios";
import { $apiWithoutToken } from "@/src/api/api";

interface IType {
  id: number;
  name: string;
  photo: any;
}

interface IFood {
  id: number;
  name: string;
  photo: any;
}

const Products = () => {
  const pathName = usePathname();
  const type = pathName.split("/");

  const categories = [
    "Все",
    "Классические",
    "Маки",
    "Драконы",
    "Запеченные",
    "Феликсы",
    "Сладкие",
  ];

  const types: IType[] = [
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

  const foods: IFood[] = [
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

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(8);
  const [products, setProducts] = useState<{
    items: IProduct[];
    isLoading: boolean;
    totalPages: number;
  }>({
    items: [],
    isLoading: true,
    totalPages: 0,
  });

  useEffect(() => {
    $apiWithoutToken
      .get(`product/all?type=${type[2]}&limit=${limit}&page=${page}`)
      .then((res) => {
        if (page == 1) {
          setProducts((prev) => ({
            items: res.data.items,
            isLoading: false,
            totalPages: res.data.totalPages,
          }));
        } else {
          setProducts((prev) => ({
            items: [...prev.items, ...res.data.items],
            isLoading: false,
            totalPages: res.data.totalPages,
          }));
        }
      });
  }, [type[2], limit, page]);

  const [showButton, setShowButton] = useState(true);

  const handleLoadMore = () => {
    if (page < products.totalPages) {
      setPage(page + 1);
    } else {
      setShowButton(false);
    }
  };

  console.log("page", products);
  return (
    <div className={styles.products}>
      <div className={styles.products__container}>
        <h3 className={styles.products__header__title}>
          {type[2] == "set" && "Сеты"}
          {type[2] == "roll" && "Ролы"}
          {type[2] == "snack" && "Закуски"}
          {type[2] == "sushi" && "Суши"}
          {type[2] == "drink" && "Напитки"}
        </h3>
        <div className={styles.products__categories}>
          {categories.map((item) => (
            <div className={styles.products__categories__item}>{item}</div>
          ))}
        </div>
        <div className={styles.products__all__content}>
          <div className={styles.products__types}>
            {types.map((item) => (
              <div className={styles.products__types__item}>
                <Image src={item.photo} alt="" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.products__foods}>
            {foods.map((food) => (
              <div className={styles.products__foods__item}>
                <Image src={food.photo} alt="" />
                <p>{food.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.products__content}>
          {products.isLoading
            ? []
            : products.items.map((product: IProduct) => (
                <Product
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
                />
              ))}
        </div>

        {page !== products.totalPages ? (
          <button
            onClick={() => handleLoadMore()}
            className={styles.products__show}
          >
            Показать больше
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Products;
