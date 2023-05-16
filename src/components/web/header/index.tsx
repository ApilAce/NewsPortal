import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./header.module.css";
import en from "../../../locales/en/header.json";
import np from "../../../locales/np/header.json";

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

  const handleLanguageChange = (language: string) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };

  const t = locale === "np" ? np : en;

  return (
    <div className={styles.container}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.newsContainer}>
            <div className={styles.date}>{t.date}</div>
            <div className={styles.category}>{t.trending}</div>
            <div className={styles.news}>{t.news}</div>
          </div>
          <div className={styles.languageContainer}>
            <div className={styles.language}>{t.language}</div>
            <div className={styles.iconContainer}>
              {languageData.map((item) => (
                <Image
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  className={styles.image}
                  width={item.width}
                  height={item.height}
                  onClick={() => handleLanguageChange(item.lng)}
                ></Image>
              ))}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
