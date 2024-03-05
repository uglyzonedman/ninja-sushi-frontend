import Image from "next/image";
import React from "react";
import sushi from "../../../../assets/sushi.png";
import styles from "./HomeProductsProduct.module.scss";
import Link from "next/link";
import classNames from "classnames";
import FavouriteIco from "@/src/components/svgs/FavouriteSvg";
import PlusIco from "@/src/components/svgs/PlusSvg";
import { IProduct } from "@/src/interfaces/product.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ProductService } from "@/src/services/product.service";
import { useAuth } from "@/src/hooks/hooks";
const HomeProductsProduct = ({
  createdAt,
  description,
  id,
  name,
  photoPath,
  price,
  type,
  updatedAt,
  volume,
  weight,
  refetch,
}: IProduct) => {
  const { mutate } = useMutation({
    mutationKey: ["change-favorite"],
    mutationFn: (id: string) => ProductService.changeFavorite(id),
    onSuccess: () => {
      refetch();
      refetchFavorites();
    },
  });
  const { user } = useAuth();
  const {
    data: favorites,
    isLoading: isLoadingFavorites,
    refetch: refetchFavorites,
  } = useQuery({
    queryKey: ["get-favorite-by-acc-id"],
    queryFn: () => ProductService.getFavoriteById(),
    enabled: !!user,
  });

  console.log("favorites", favorites);

  const checkFavoriteById = (id: string) => {
    return isLoadingFavorites
      ? []
      : favorites?.items.find((item) => item.productId == id)
      ? true
      : false;
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image
          src={
            photoPath == ""
              ? ""
              : `http://localhost:8080/api-v2/product/file/sushies/${photoPath}`
          }
          alt="product"
          width={150}
          height={200}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Link href={`/products/${type}/${id}`} className={styles.product__title}>
        {name}
      </Link>
      <p className={styles.product__weight}>
        {weight !== 0 || weight == undefined || weight == null
          ? `Вес: ${weight} г`
          : `Объем ${volume} л`}
      </p>
      <p className={styles.product__desc}>
        {description == "" ? "" : description}
      </p>
      <div className={styles.product__footer}>
        <p className={styles.product__footer__price}>
          {price} <span>тг</span>
        </p>
        <div className={styles.product__footer__buttons}>
          <button
            className={classNames(
              checkFavoriteById(id)
                ? styles.product__footer__buttons__favouriteaccept
                : styles.product__footer__buttons__favourite
            )}
            onClick={() => {
              mutate(id);
            }}
          >
            <FavouriteIco fill={"#ffffff"} color={"#ffffff"} />
          </button>
          <button className={styles.product__footer__buttons__plus}>
            <PlusIco />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductsProduct;
