import Image from "next/image";
import React from "react";
import sushi from "../../../../assets/sushi.png";
import styles from "./HomeProductsProduct.module.scss";
import Link from "next/link";
import classNames from "classnames";
import FavouriteIco from "@/src/components/svgs/FavouriteSvg";
import PlusIco from "@/src/components/svgs/PlusSvg";
const HomeProductsProduct = () => {
  return (
    <div className={styles.product}>
      <Image
        className={styles.product__image}
        src={sushi}
        width={331}
        height={270}
        alt="product"
      />
      <Link href={`/products/product/1`} className={styles.product__title}>
        Гункан лосось
      </Link>
      <p className={styles.product__weight}>Вес: 40 г</p>
      <p className={styles.product__desc}>
        Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное
        масло
      </p>
      <div className={styles.product__footer}>
        <p className={styles.product__footer__price}>
          1900 <span>тг</span>
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

export default HomeProductsProduct;
