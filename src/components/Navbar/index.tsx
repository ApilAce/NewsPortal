import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.date}>आइतबार, ३ वैशाख २०८०</div>
          <div className={styles.category}>ट्रेन्डिङ</div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
