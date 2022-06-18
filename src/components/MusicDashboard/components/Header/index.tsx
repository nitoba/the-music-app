import { HTMLAttributes } from "react";
import arrowLeftIcon from "../../../../assets/icons/arrow-left.svg";
import arrowRightIcon from "../../../../assets/icons/arrow-right.svg";
import notificationIcon from "../../../../assets/icons/notification.svg";
import searchIcon from "../../../../assets/icons/search.svg";
import styles from "./styles.module.scss";

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={`${styles.container} ${className}`} {...props}>
      <div className={styles.containerLeft}>
        <button className={styles.buttonAction}>
          <img src={arrowLeftIcon} alt="Arrow left icon" />
        </button>
        <div className={styles.currentResourceContainer}>
          <span>Home</span>
          <img src={arrowRightIcon} alt="arrow right icon" />
          <span>Popular Artist</span>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.searchInput}>
          <img src={searchIcon} alt="Search icon" />
          <input type="text" placeholder="Search music, artist, albums..." />
        </div>
        <button className={styles.buttonAction}>
          <img src={notificationIcon} alt="Icon of bell" />
        </button>
      </div>
    </header>
  );
}
