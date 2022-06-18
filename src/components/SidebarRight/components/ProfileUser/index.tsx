import { HTMLAttributes } from "react";
import arrowDownIcon from "../../../../assets/icons/arrow-down.svg";
import premiumIcon from "../../../../assets/icons/premium.svg";

import styles from "./styles.module.scss";

interface ProfileUserProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  avatarUrl: string;
  premium?: boolean;
}

export function ProfileUser({
  name,
  avatarUrl,
  premium = false,
  className,
  ...props
}: ProfileUserProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <img className={styles.avatar} src={avatarUrl} />
      <div className={styles.usernameContainer}>
        <strong className={styles.username}>{name}</strong>
        {premium && (
          <div className={styles.typeUserContainer}>
            <span>Premium</span>
            <img src={premiumIcon} alt="premium icon image" />
          </div>
        )}
      </div>
      <img
        className={styles.arrow}
        src={arrowDownIcon}
        alt="arrow down icon image"
      />
    </div>
  );
}
