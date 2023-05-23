import React from "react";
import styles from "./healthcare.module.css";
import { IoCalendarOutline } from "react-icons/io5";
 

interface healthDataItemProps {
  category: string;
  title: string;
  date: string;
}
const healthData = [
  {
    category: "Health",
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
  {
    category: "Health",
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
  {
    category: "Health",
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
  {
    category: "Health",
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
  {
    category: "Health",
    title: "White house and justice Discussed Dept.",
    date: "12 Jan 2023",
  },
];

const Health: React.FC<healthDataItemProps> = ({}) => {
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
            {healthData.map((item: healthDataItemProps) => (
              <div className={styles.healthContainer}>
                <div className={styles.category}>{item.category} </div>
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
