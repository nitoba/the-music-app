import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface RecentlyPlayedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
}

export function RecentlyPlayedSection({
  children,
  title,
  className,
  ...props
}: RecentlyPlayedSectionProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <header className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.buttonSeeAll}>See all</button>
      </header>

      <main className={styles.recentlyPlayedSectionContent}>{children}</main>
    </div>
  );
}
