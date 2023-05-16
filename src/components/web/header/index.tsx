import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./header.module.css";
import en from "../../../locales/en/header.json";
import np from "../../../locales/np/header.json";
import clsx from "clsx";
import { useState } from "react";
import { IoIosCalendar } from "react-icons/io";

const languageData = [
  {
    src: "/images/header/nepal-flag.png",
    alt: "Nepal Flag",
    width: 12,
    height: 12,
    lng: "np",
  },
  {
    src: "/images/header/us-flag.png",
    alt: "US Flag",
    width: 20,
    height: 20,
    lng: "en",
  },
];

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const [language, setLanguage] = useState<string>("en");

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    router.push(router.pathname, router.asPath, { locale: language });
  };

  const t = locale === "np" ? np : en;

  return (
    <div className={styles.container}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.newsContainer}>
            <div className={styles.dateContainer}>
              <IoIosCalendar className={styles.dateIcon} />
              <div className={styles.date}>{t.date}</div>
            </div>
            <div className={styles.category}>{t.trending}</div>
            <div className={styles.news}>{t.news}</div>
          </div>
          <div className={styles.languageContainer}>
            <div className={styles.language}>{t.language}</div>
            <div className={styles.iconContainer}>
              {languageData.map((item) => (
                <div
                  className={clsx(
                    styles.imageContainer,
                    language === item.lng ? styles.active : ""
                  )}
                  onClick={() => handleLanguageChange(item.lng)}
                  key={item.alt}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className={styles.image}
                    width={item.width}
                    height={item.height}
                  ></Image>
                </div>
              ))}
            </div>
          </div>
        </header>
        <header className={styles.subHeader}></header>
      </div>
    </div>
  );
};

export default Header;
