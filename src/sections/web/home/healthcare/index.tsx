import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import styles from "./healthcare.module.css";

interface Category {
  category: string;
  colour: string;
}

interface HealthItemProps {
  categories: Category[];
  title: string;
  date: string;
}

interface HealthProps {
  healthData: HealthItemProps[];
}

const healthData = [
  {
    categories: [{ category: "News", colour: "var(--info)" }],
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
  {
    categories: [
      { category: "News", colour: "var(--info)" },
      { category: "Health", colour: "var(--success)" },
    ],
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
  {
    categories: [{ category: "News", colour: "var(--info)" }],
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
  {
    categories: [{ category: "News", colour: "var(--info)" }],
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
  {
    categories: [
      { category: "News", colour: "var(--info)" },
      { category: "Health", colour: "var(--success)" },
    ],
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
];

const Health: React.FC<HealthProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.titleContainer}>
            <h2 className="section-title"> Healthcare</h2>
            <h6 className="section-subtitle">
              Something special from all over the world{" "}
            </h6>
          </div>

          <div className={styles.healthGrid}>
            {healthData.map((item: HealthItemProps) => (
              <div className={styles.healthContainer} key={item.title}>
                <div className={styles.categoryContainer}>
                  {item.categories.slice(0, 2).map((categoryList: Category) => (
                    <div
                      className={styles.category}
                      style={{ backgroundColor: categoryList.colour }}
                      key={categoryList.category}
                    >
                      {categoryList.category}
                    </div>
                  ))}
                </div>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.dateContainer}>
                  <IoCalendarOutline className={styles.icon} />
                  <div className={styles.date}>{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
