import styles from "./styles.module.scss";

export function FansLikeSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Fans Also Like</h2>
        <button className={styles.buttonSeeAll}>See all</button>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.artistCover}>
          <img src="https://source.unsplash.com/random" />
          <footer className={styles.footer}>
            <strong>James Arthur</strong>
            <span>Artist</span>
          </footer>
        </div>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.active}`} />
          <div className={`${styles.dot} `} />
          <div className={`${styles.dot} `} />
          <div className={`${styles.dot} `} />
        </div>
      </main>
    </div>
  );
}
