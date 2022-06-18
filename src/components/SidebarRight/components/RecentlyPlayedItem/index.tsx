import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface RecentlyPlayedItem extends HTMLAttributes<HTMLDivElement> {
  title: string;
  artist: string;
  imageUrl: string;
  time: string;
}

export function RecentlyPlayedItem({
  title,
  artist,
  imageUrl,
  time,
}: RecentlyPlayedItem) {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <img src={imageUrl} />
        <div className={styles.infoContent}>
          <h3>{title}</h3>
          <p>{artist}</p>
        </div>
      </div>
      <time>{time}</time>
    </div>
  );
}
