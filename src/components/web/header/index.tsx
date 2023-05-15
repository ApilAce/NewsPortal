import styles from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.newsContainer}>
            <div className={styles.date}>आइतबार, ३ वैशाख २०८०</div>
            <div className={styles.category}>ट्रेन्डिङ</div>
            <div className={styles.news}>तनहुँमा घरमा ठोक्कियो ट्रक, ९ जना घाइते</div>
          </div>
          <div className={styles.languageContainer}>
            <div className={styles.language}>भाषा</div>
            <div className={styles.iconContainer}>
              <Image
                src={"/images/header/nepal-flag.png"}
                alt="Nepal Flag"
                className={styles.image}
                width={12}
                height={12}
              ></Image>
              <Image
                src={"/images/header/us-flag.png"}
                alt="US Flag"
                className={styles.image}
                width={20}
                height={20}
              ></Image>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
