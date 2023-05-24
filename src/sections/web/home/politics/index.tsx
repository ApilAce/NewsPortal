import React from "react";
import styles from "./politics.module.css";
import Card from "@/components/web/card";

interface CategoryProps {
  name: string;
}

interface JournalistProps {
  id: number;
  name: string;
  email: string;
}

interface CategoryRelationProps {
  category: CategoryProps;
}

interface Article {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
  createdById: number;
  createdAt: string;
  updatedAt: string;
  journalistId: number;
  verified: boolean;
  status: string;
  categoryRelation: CategoryRelationProps[];
  journalist: JournalistProps;
}

interface ArticleProps {
  articles: Article[];
}

const Politics: React.FC<ArticleProps> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h2 className={"section-title"}>Politics</h2>
          <h6 className={"section-subtitle"}>Latest Events and News</h6>
        </div>
        <div className={styles.cardContainer}>
          {articles.map((cardItem: Article) => (
            <Card cardItem={cardItem} key={cardItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Politics;
