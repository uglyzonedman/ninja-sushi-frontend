import React from "react";
import new1 from "../../assets/news1.jpg";
import styles from "./News.module.scss";
import Image from "next/image";
import Link from "next/link";
import search from "../../assets/search.png";
const News = () => {
  const news = [
    {
      id: 0,
      type: "Музыка",
      title: "6 нових музикальних альбомів для твого плей-листу",
      url: new1,
    },
    {
      id: 1,
      type: "Музыка",
      title: "Ninja вернули лосось",
      url: new1,
    },
    {
      id: 2,
      type: "Обновления в меню",
      title: "Привет! Мы уже на правом!",
      url: new1,
    },
    {
      id: 3,
      type: "Обновления в меню",
      title: "Привет! Мы уже на правом!",
      url: new1,
    },
    {
      id: 4,
      type: "Обновления в меню",
      title: "Привет! Мы уже на правом!",
      url: new1,
    },
    {
      id: 5,
      type: "Обновления в меню",
      title: "Привет! Мы уже на правом!",
      url: new1,
    },
    {
      id: 6,
      type: "Обновления в меню",
      title: "Привет! Мы уже на правом!",
      url: new1,
    },
    {
      id: 7,
      type: "Обновления в меню",
      title: "Привет! Мы уже на правом!",
      url: new1,
    },
    {
      id: 8,
      type: "Обновления в меню",
      title: "Привет! Мы уже на правом!",
      url: new1,
    },
    {
      id: 9,
      type: "Обновления в меню",
      title: "Привет! Мы уже на правом!",
      url: new1,
    },
  ];
  return (
    <div className={styles.news}>
      <div className={styles.news__container}>
        <h3 className={styles.news__title}>Новости</h3>
        <div className={styles.news__header}>
          <ul className={styles.news__header__left}>
            <button className={styles.news__header__left__link}>Все</button>
            <button className={styles.news__header__left__link}>
              Обновления в меню
            </button>
            <button className={styles.news__header__left__link}>
              SushiKino
            </button>
          </ul>
          <div className={styles.news__header__right}>
            <Image src={search} alt="search" />
            <input
              className={styles.news__header__right__input}
              type="text"
              placeholder="Введите ключевые слова"
            />
          </div>
        </div>

        <div className={styles.news__content}>
          {news.map((item) => (
            <div className={styles.news__content__item}>
              <Image src={item.url} alt={item.title} />
              <div className={styles.news__content__item__block}>
                <div className={styles.news__content__item__header}>
                  <div className={styles.news__content__item__header__left}>
                    <p
                      className={
                        styles.news__content__item__header__left__category
                      }
                    >
                      {item.type}
                    </p>
                  </div>
                  <p className={styles.news__content__item__header__right}>
                    10.06.2022
                  </p>
                </div>
                <h3 className={styles.news__content__item__title}>
                  {item.title}
                </h3>
                <Link className={styles.news__content__item__link} href="/">
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.news__show}>Показать больше</button>
      </div>
    </div>
  );
};

export default News;
