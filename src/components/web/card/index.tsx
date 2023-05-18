import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import { IoCalendarOutline, IoPersonCircleOutline } from "react-icons/io5";

interface CardData {
  date: string;
  title: string;
  author: string;
  description: string;
  image: string;
}
interface CardProps {
  cardItem: CardData;
}

const Card: React.FC<CardProps> = ({ cardItem }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image alt={cardItem.title} src={cardItem.image} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.dateContainer}>
          <IoCalendarOutline className={styles.icon} />
          <div className={styles.date}>{cardItem.date}</div>
        </div>
        <h2 className={styles.title}>{cardItem.title}</h2>
        <div className={styles.authorContainer}>
          <IoPersonCircleOutline className={styles.icon} />
          <div className={styles.date}>{cardItem.author}</div>
        </div>
        <div className={styles.description}>{cardItem.description}</div>
      </div>
    </div>
  );
};

export default Card;
