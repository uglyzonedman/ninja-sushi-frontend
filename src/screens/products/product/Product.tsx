import React from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import Link from "next/link";
import FavouriteIco from "@/src/components/svgs/FavouriteSvg";
import PlusIco from "@/src/components/svgs/PlusSvg";
import classNames from "classnames";
import { IProduct } from "@/src/interfaces/product.interface";
const Product = ({
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
}: IProduct) => {
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
            className={classNames(styles.product__footer__buttons__favourite)}
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

export default Product;
