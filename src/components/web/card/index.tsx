import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import { IoCalendarOutline, IoPersonCircleOutline } from "react-icons/io5";

interface JournalistProps {
  id: number;
  name: string;
  email: string;
}

interface CardData {
  updatedAt: string;
  title: string;
  author?: string;
  body: string;
  imageUrl: string;
  journalist: JournalistProps;
}

interface CardProps {
  cardItem: CardData;
}

const Card: React.FC<CardProps> = ({ cardItem }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          alt={cardItem.title}
          src={process.env.NEXT_PUBLIC_CLOUDINARY_URL + cardItem.imageUrl}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.dateContainer}>
          <IoCalendarOutline className={styles.icon} />
          <div className={styles.date}>{cardItem.updatedAt}</div>
        </div>
        <h2 className={styles.title}>{cardItem.title}</h2>
        <div className={styles.authorContainer}>
          <IoPersonCircleOutline className={styles.icon} />
          <div className={styles.date}>{cardItem.journalist.name}</div>
        </div>
        <div className={styles.description}>{cardItem.body}</div>
      </div>
    </div>
  );
};

export default Card;
