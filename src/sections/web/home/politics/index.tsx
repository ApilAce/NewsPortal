import React from "react";
import styles from "./politics.module.css";
import Card from "@/components/web/card";

const cardData = [
  {
    date: "Jan 12, 2023",
    title: "White house and justice Dept. Discussed Mueller Report Before Release",
    author: "Mr. Rajesh",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto quo ipsam aliquid veniam alias, vitae, officiis reiciendis nostrum iure unde tempore dolorum perspiciatis tempora mollitia eius quaerat iste eaque?",
    image: "/images/dummy/cricket.png",
  },
  {
    date: "Jan 12, 2023",
    title: "White house and justice Dept. Discussed Mueller Report Before Release",
    author: "Mr. Rajesh",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto quo ipsam aliquid veniam alias, vitae, officiis reiciendis nostrum iure unde tempore dolorum perspiciatis tempora mollitia eius quaerat iste eaque?",
    image: "/images/dummy/cricket.png",
  },
  {
    date: "Jan 12, 2023",
    title: "White house and justice Dept. Discussed Mueller Report Before Release",
    author: "Mr. Rajesh",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto quo ipsam aliquid veniam alias, vitae, officiis reiciendis nostrum iure unde tempore dolorum perspiciatis tempora mollitia eius quaerat iste eaque?",
    image: "/images/dummy/cricket.png",
  },
  {
    date: "Jan 12, 2023",
    title: "White house and justice Dept. Discussed Mueller Report Before Release",
    author: "Mr. Rajesh",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto quo ipsam aliquid veniam alias, vitae, officiis reiciendis nostrum iure unde tempore dolorum perspiciatis tempora mollitia eius quaerat iste eaque?",
    image: "/images/dummy/cricket.png",
  },
  {
    date: "Jan 12, 2023",
    title: "White house and justice Dept. Discussed Mueller Report Before Release",
    author: "Mr. Rajesh",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto quo ipsam aliquid veniam alias, vitae, officiis reiciendis nostrum iure unde tempore dolorum perspiciatis tempora mollitia eius quaerat iste eaque?",
    image: "/images/dummy/cricket.png",
  },
  {
    date: "Jan 12, 2023",
    title: "White house and justice Dept. Discussed Mueller Report Before Release",
    author: "Mr. Rajesh",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto quo ipsam aliquid veniam alias, vitae, officiis reiciendis nostrum iure unde tempore dolorum perspiciatis tempora mollitia eius quaerat iste eaque?",
    image: "/images/dummy/cricket.png",
  },
  {
    date: "Jan 12, 2023",
    title: "White house and justice Dept. Discussed Mueller Report Before Release",
    author: "Mr. Rajesh",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto quo ipsam aliquid veniam alias, vitae, officiis reiciendis nostrum iure unde tempore dolorum perspiciatis tempora mollitia eius quaerat iste eaque?",
    image: "/images/dummy/cricket.png",
  },
];

const Politics = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h2 className={"section-title"}>Politics</h2>
          <h6 className={"section-subtitle"}>Latest Events and News</h6>
        </div>
        <div className={styles.cardContainer}>
          {cardData.map((cardItem) => (
            <Card cardItem={cardItem} key={cardItem.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Politics;
