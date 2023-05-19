import React from "react";
import styles from "./hero.module.css";
import clsx from "clsx";
import Image from "next/image";

interface HomeDataItemProps {
  image: string;
  category: string;
  title: string;
}

interface HomeDataProps {
  leftData: HomeDataItemProps[];
  middleData: HomeDataItemProps[];
  rightData: HomeDataItemProps[];
}

interface HeroProps {
  homeData: HomeDataProps;
}

const Hero: React.FC<HeroProps> = ({ homeData }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridItems}>
        {homeData.leftData.map((item: HomeDataItemProps) => (
          <div className={clsx(styles.imageContainer, styles.sideImageContainer)} key={item.title}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={styles.image}
              // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
            />
            <div className={clsx(styles.titleContainer, styles.container)}>
              <div className={styles.category}>{item.category}</div>
              <h2 className={styles.title}>{item.title}</h2>
            </div>
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>
      <div className={styles.gridItems}>
        {homeData.middleData.map((item: HomeDataItemProps) => (
          <div className={clsx(styles.imageContainer, styles.mainImageContainer)} key={item.title}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={styles.image}
              // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
            />
            <div className={clsx(styles.titleContainer, styles.container)}>
              <div className={styles.category}>{item.category}</div>
              <h2 className={styles.title}>{item.title}</h2>
            </div>
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>
      <div className={styles.gridItems}>
        {homeData.rightData.map((item: HomeDataItemProps) => (
          <div className={clsx(styles.imageContainer, styles.sideImageContainer)} key={item.title}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={styles.image}
              // sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
            />
            <div className={clsx(styles.titleContainer, styles.container)}>
              <div className={styles.category}>{item.category}</div>
              <h2 className={styles.title}>{item.title}</h2>
            </div>
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
