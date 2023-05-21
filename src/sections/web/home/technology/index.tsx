import React from "react";
import styles from "./technology.module.css";
import Image from "next/image";
import clsx from "clsx";

interface TechDataItemProps {
  image: string;
  category: string;
  title: string;
}

interface TechProps {
  TechData: TechDataItemProps[];
}
const techData = [
  {
    image: "/images/dummy/suii.png",
    category: "Technology",
    title: "वैशाखमा हिमपात, के अस्वाभाविक हो ? ",
  },
  {
    image: "/images/dummy/suii.png",
    category: "Technology",
    title: "वैशाखमा हिमपात, के अस्वाभाविक हो ? ",
  },
];

const Tech: React.FC<TechProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.titleContainer}>
            <h2 className="section-title"> Technology</h2>
            <h6 className="section-subtitle">Interview and Review</h6>
          </div>

          <div className={styles.imageGrid}>
            {techData.map((item: TechDataItemProps) => (
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />

                <div className={clsx(styles.headingContainer)}>
                  <div className={styles.category}>{item.category} </div>
                  <h2 className={styles.title}>{item.title}</h2>
                </div>
                <div className={styles.overlay}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tech;
