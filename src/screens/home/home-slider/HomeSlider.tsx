"use client";
import React, { useRef, useState } from "react";
import banner1 from "../../../assets/banner1.webp";
import banner2 from "../../../assets/banner2.webp";
import banner3 from "../../../assets/banner3.webp";
import banner4 from "../../../assets/banner4.webp";
import banner5 from "../../../assets/banner5.webp";
import banner6 from "../../../assets/banner6.webp";
import styles from "./HomeSlider.module.scss";
import Link from "next/link";
import classNames from "classnames";

const slides = [
  {
    id: 1,
    title: "Ninja на турнире по Valorant в Астане!",
    desciption: "Ниндзя-фанаты киберспорта",
    banner: banner1,
  },
  {
    id: 2,
    title: "Подарки от ниндзя в WAKE UP SHOW от DJ FM",
    desciption: "С понедельника по пятницу",
    banner: banner2,
  },
  {
    id: 3,
    title: "Подарки от ниндзя суши и плохого парня",
    desciption: "Подарок можно забрать до 30 мая",
    banner: banner3,
  },
  {
    id: 4,
    title: "Коллекция Ninja Sushi Spring Collection",
    desciption: "В тренде зеленый, розовый и оранжевый",
    banner: banner4,
  },
  {
    id: 5,
    title: "Что смотрели ниндзя в 2022?",
    desciption: "Определяйтесь с выбором",
    banner: banner5,
  },
  {
    id: 6,
    title: "Лимитированный дроп патриотической футболки от Ninja",
    desciption: "Придбати можна за 22000 тг",
    banner: banner6,
  },
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const handleSwipe = (deltaX: number) => {
    if (deltaX > 0) {
      goToPrevSlide();
    } else {
      goToNextSlide();
    }
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStart(event.clientX);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const currentPosition = event.clientX;
    const dragDistance = currentPosition - dragStart;
    const sliderWidth = sliderRef.current.offsetWidth;
    const dragThreshold = sliderWidth * 0.1;

    if (dragDistance > dragThreshold) {
      goToPrevSlide();
      setIsDragging(false);
    } else if (dragDistance < -dragThreshold) {
      goToNextSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={styles.slider}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className={styles.slider__container}>
        <div className={styles.slider__swipeable}>
          <div
            className={styles.slider__content}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                className={styles.slider__slide}
                key={slide.id}
                style={{
                  backgroundImage: `url(${slide.banner.src})`,
                  backgroundSize: "cover",
                }}
              >
                <div className={styles.slider__slide__content}>
                  <h3>{slide.title}</h3>
                  <p>{slide.desciption}</p>
                  <Link
                    className={styles.slider__slide__content__link}
                    href={"/news"}
                  >
                    Перейти к новости
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.slider__dots}>
            {slides.map((slide) => (
              <button
                key={slide.id}
                className={classNames(
                  styles.slider__dots__dot,
                  slide.id - 1 == currentIndex
                    ? [styles.slider__dots__dot__active]
                    : ""
                )}
                onClick={() => goToSlide(slide.id - 1)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
