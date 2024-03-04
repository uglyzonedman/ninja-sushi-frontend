import React from "react";
import styles from "../profile-layout/ProfileLayout.module.scss";
const ProfileFavorite = () => {
  return (
    <>
      <div className={styles.profile__favorite}>
        <h3 className={styles.profile__favorite__tittle}>Избранные товары</h3>
      </div>
      {/* {user ? (
        favoriteLoading ? (
          []
        ) : favoriteFetch?.length == 0 ? (
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
            {favoriteFetch?.map((favorite: any) => (
              <Product
                product={favorite.product}
                favoriteCheck={
                  favoriteLoading
                    ? null
                    : favoriteFetch.some(
                        (item) => item.product.id == favorite.product.id
                      )
                }
              />
            ))}
          </div>
        )
      ) : favoriteState?.length == 0 ? (
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
      )} */}
    </>
  );
};

export default ProfileFavorite;
