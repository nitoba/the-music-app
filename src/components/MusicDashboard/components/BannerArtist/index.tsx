import { HTMLAttributes } from "react";
import verifiedIcon from "../../../../assets/icons/verified.svg";
import headphoneIcon from "../../../../assets/icons/headphone.svg";
import checkIcon from "../../../../assets/icons/check.svg";
import styles from "./styles.module.scss";

interface BannerArtistProps extends HTMLAttributes<HTMLDivElement> {}

export function BannerArtist({ className, ...props }: BannerArtistProps) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <img
        src="https://source.unsplash.com/random"
        className={styles.bannerImage}
      />
      <div className={styles.artistInfo}>
        <div className={styles.artistStatus}>
          <img src={verifiedIcon} alt="verified icon" />
          <span>Verified Artist</span>
        </div>

        <h1 className={styles.artistName}>Ed Sheeran</h1>

        <div className={styles.artistCountPlays}>
          <img src={headphoneIcon} alt="headphone icon" />
          <strong>82,736,050</strong>
          <span>monthly listeners</span>
        </div>

        <div className={styles.buttons}>
          <button>Play</button>
          <button>
            <img src={checkIcon} alt="check icon" />
            Following
          </button>
        </div>
      </div>
    </div>
  );
}
