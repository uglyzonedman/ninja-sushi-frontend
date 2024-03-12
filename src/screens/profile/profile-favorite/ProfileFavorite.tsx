import React from "react";
import styles from "../profile-layout/ProfileLayout.module.scss";
import { useAuth } from "@/src/hooks/hooks";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/src/services/product.service";
import Image from "next/image";
import favoritecontent from "../../../assets/favoritecontent.png";
import Product from "../../products/product/Product";
const ProfileFavorite = () => {
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
  console.log(favorites);
  return (
    <>
      <div className={styles.profile__favorite}>
        <h3 className={styles.profile__favorite__tittle}>Избранные товары</h3>
      </div>
      {user ? (
        isLoadingFavorites ? (
          []
        ) : favorites?.items.length == 0 ? (
          <div className={styles.profile__favorite__content}>
            <Image alt="favoritecontent" src={favoritecontent} />
            <div className={styles.profile__favorite__content__block}>
              <p className={styles.profile__favorite__content__tittle}>
                Вы еще ничего не добавили в избанное
              </p>
              <p className={styles.profile__favorite__content__description}>
                Переходите в интересующую вас категорию и отмечайте
                понравившиеся
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.profile__favorite__content__products}>
            {favorites?.items.map((favorite) => (
              <Product
                createdAt={favorite.Product.createdAt}
                description={favorite.Product.description}
                id={favorite.Product.id}
                name={favorite.Product.name}
                photoPath={favorite.Product.photoPath}
                price={favorite.Product.price}
                type={favorite.Product.type}
                updatedAt={favorite.Product.updatedAt}
                volume={favorite.Product.volume}
                weight={favorite.Product.weight}
              />
            ))}
          </div>
        )
      ) : favorites?.items?.length == 0 ? (
        <div className={styles.profile__favorite__content}>
          <Image alt="favoritecontent" src={favoritecontent} />
          <div className={styles.profile__favorite__content__block}>
            <p className={styles.profile__favorite__content__tittle}>
              Вы еще ничего не добавили в избанное
            </p>
            <p className={styles.profile__favorite__content__description}>
              Переходите в интересующую вас категорию и отмечайте понравившиеся
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileFavorite;
