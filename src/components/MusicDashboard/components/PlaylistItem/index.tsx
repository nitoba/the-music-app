import headphoneIcon from "../../../../assets/icons/headphone.svg";
import clockIcon from "../../../../assets/icons/clock.svg";
import favoriteOutlineIcon from "../../../../assets/icons/favorite-outline.svg";
import dotsIcon from "../../../../assets/icons/dots.svg";
import playAltIcon from "../../../../assets/icons/play-alt.svg";

import styles from "./styles.module.scss";
import { handleCalculateDuration } from "../../../../utils/calculate-music-duration";

interface PlaylistItemProps {
  number: number;
  title: string;
  musicCount: number;
  musicCover: string;
  musicDurationInSeconds: number;
  isSelected: boolean;
  onClick: () => void;
}

export function PlaylistItem({
  isSelected,
  number,
  title,
  musicCount,
  musicCover,
  musicDurationInSeconds,
  onClick,
}: PlaylistItemProps) {
  return (
    <div
      className={`${styles.container} ${isSelected && styles.selected}`}
      onClick={onClick}
    >
      <div className={styles.leftSide}>
        <span>{number}</span>
        {!isSelected && (
          <img
            className={styles.playButton}
            src={playAltIcon}
            alt="play icon"
          />
        )}
        <img className={styles.musicCover} src={musicCover} />
        <h5 className={styles.musicTitle}>{title}</h5>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.playsCounter}>
          <img src={headphoneIcon} alt="headphone icon" />
          <strong>
            {new Intl.NumberFormat("US", {
              style: "decimal",
              maximumFractionDigits: 2,
            }).format(musicCount)}
          </strong>
        </div>
        <div className={styles.musicDuration}>
          <img src={clockIcon} alt="clock icon" />
          <strong>{handleCalculateDuration(musicDurationInSeconds)}</strong>
        </div>
        <img
          className={styles.icon}
          src={favoriteOutlineIcon}
          alt="favorite outline icon"
        />
        <img className={styles.icon} src={dotsIcon} alt="dots icon" />
      </div>
    </div>
  );
}
