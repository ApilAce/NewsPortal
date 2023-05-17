import React, { useState } from "react";
import styles from "./navbar.module.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoSearch,
  IoMenuOutline,
  IoCloseOutline,
  IoMailOutline,
} from "react-icons/io5";
import Link from "next/link";
import clsx from "clsx";

const socialList = [
  { icon: IoLogoFacebook },
  { icon: IoLogoInstagram },
  { icon: IoLogoYoutube },
  { icon: IoSearch },
];

const navData = [
  { title: "News", link: "#" },
  { title: "Business", link: "#" },
  { title: "Life", link: "#" },
  { title: "Entertainment", link: "#" },
  { title: "Thoughts", link: "#" },
  { title: "Sports", link: "#" },
];

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const toggleNavbarActive = () => {
    setNavbarActive((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className="container">
          <div className={styles.headerTopContainer}>
            <button className={styles.headerAction}>
              <IoMailOutline className={styles.headerIcon} />
              Membership
            </button>
            <div className={styles.headerTopWrapper}>
              <button className={styles.headerActionBtn} onClick={toggleNavbarActive}>
                {navbarActive ? (
                  <IoCloseOutline className={styles.headerIcon} />
                ) : (
                  <IoMenuOutline className={styles.headerIcon} />
                )}
              </button>
              <div className={styles.headerTitle}>News</div>
            </div>
            <ul className={styles.socialList}>
              {socialList.map((social, index) => (
                <li className={styles.socialLink} key={index}>
                  <social.icon className={styles.socialIcon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className="container">
          <nav className={clsx(styles.navbar, navbarActive && styles.active)}>
            <ul className={clsx(styles.navbarList, "container")}>
              {navData.map((navItem) => (
                <li key={navItem.title}>
                  <Link className={styles.navbarLink} href={navItem.link}>
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
