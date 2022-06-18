import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

interface PlaylistProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  seeAll: () => void;
}

export function Playlist({
  title,
  seeAll,
  children,
  className,
  ...props
}: PlaylistProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <header className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.buttonSeeAll} onClick={seeAll}>
          See All
        </button>
      </header>
      {children}
    </div>
  );
}
