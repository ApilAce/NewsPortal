import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import en from "../../../locales/en/header.json";
import np from "../../../locales/np/header.json";
import styles from "./header.module.css";

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

const subHeaderData = {
  leftData: [
    { title: "trending" },
    { title: "team" },
    { title: "advertisement" },
    { title: "thoughts" },
  ],
  rightData: [{ title: "membership" }, { title: "trending" }],
};

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const [language, setLanguage] = useState<string>("en");

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    localStorage.setItem("language", language); // Store in localStorage
    router.push(router.pathname, router.asPath, { locale: language });
  };

  const t: any = locale === "np" ? np : en;

  useEffect(() => {
    // Retrieve value from localStorage
    const storedLanguage = localStorage.getItem("language");

    // Set the stored value as initial state if it exists
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  return (
    <>
      {/* <Head>
        {locales.map((locale) => (
          <link
            rel="alternate"
            hrefLang={locale}
            href={`https://yourwebsite.com/${locale}${router.asPath}`}
            key={locale}
          />
        ))}
      </Head> */}
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
        </div>
      </div>
      <div className={styles.subWrapper}>
        <div className={"container"}>
          <header className={styles.subHeader}>
            <div className={styles.subHeaderList}>
              {subHeaderData.leftData.map((headerItem) => (
                <div className={styles.subHeaderTitle} key={headerItem.title}>
                  {t[headerItem.title]}
                </div>
              ))}
            </div>
            <div className={styles.subHeaderList}>
              {subHeaderData.rightData.map((headerItem) => (
                <div className={styles.subHeaderTitle} key={headerItem.title}>
                  {t[headerItem.title]}
                </div>
              ))}
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
