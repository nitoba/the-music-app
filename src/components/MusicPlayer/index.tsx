import { useEffect, useRef, useState } from "react";
import { useMusicPlayer } from "../../contexts/music-player-context";
import { handleCalculateDuration } from "../../utils/calculate-music-duration";

import favoriteOutline from "../../assets/icons/favorite-outline.svg";
import shuffleIcon from "../../assets/icons/shuffle.svg";
import previousIcon from "../../assets/icons/previous.svg";
import buttonPaused from "../../assets/icons/button-paused.svg";
import buttonPlay from "../../assets/icons/button-play.svg";
import nextIcon from "../../assets/icons/next.svg";
import repeatIcon from "../../assets/icons/repeat.svg";
import volumeIcon from "../../assets/icons/volume.svg";

import music from "../../assets/music/lofi-study.mp3";

import styles from "./styles.module.scss";

export function MusicPlayer() {
  const {
    setPlaying,
    playing,
    currentTime,
    setCurrentTime,
    audio,
    setAudio,
    setDuration,
    duration,
    setVolume,
    volume,
  } = useMusicPlayer();
  const volumeRef = useRef<HTMLDivElement>(null);
  const [currentProgress, setCurrentProgress] = useState(0);

  function handleTogglePlay() {
    console.log("toggle play");

    if (audio?.paused) {
      audio?.play();
      setPlaying(true);
    } else {
      audio?.pause();
      setPlaying(false);
    }
  }

  function handleChangeVolume(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { clientX } = e;
    const { left, width } = volumeRef.current?.getBoundingClientRect() || {};

    if (!left || !width) {
      return;
    }

    const newVolume = (clientX - left) / width;

    setVolume(newVolume);

    if (audio) {
      audio.volume = newVolume;
    }
  }

  function handleToggleMuteAudio() {
    if (!audio) return;
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
  }

  useEffect(() => {
    setAudio(new Audio(music));
  }, []);

  useEffect(() => {
    if (audio) {
      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime);
        setCurrentProgress((audio.currentTime / audio.duration) * 100);
      };

      audio.onplay = () => {
        setDuration(isNaN(audio.duration) ? 0 : audio.duration);
      };
    }
  }, [audio]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.progressContainer}>
          <div
            className={styles.currentProgress}
            style={{
              width: `${currentProgress}%`,
            }}
          />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.musicInfoContainer}>
            <img
              className={styles.musicCover}
              src="https://source.unsplash.com/random"
            />
            <div className={styles.musicAndArtist}>
              <h3>Lofi Study</h3>
              <p>Artist Name</p>
            </div>
            <img
              className={styles.likeButton}
              src={favoriteOutline}
              alt="like icon"
            />
          </div>
          <div className={styles.playerControls}>
            <button className={styles.buttonControl}>
              <img src={shuffleIcon} alt="shuffle icon" />
            </button>

            <button className={styles.buttonControl}>
              <img src={previousIcon} alt="previous icon" />
            </button>

            <button className={styles.buttonControl} onClick={handleTogglePlay}>
              <img
                src={playing ? buttonPaused : buttonPlay}
                alt="play button icon"
              />
            </button>

            <button className={styles.buttonControl}>
              <img src={nextIcon} alt="next icon" />
            </button>

            <button className={styles.buttonControl}>
              <img src={repeatIcon} alt="repeat icon" />
            </button>
          </div>
          <div className={styles.durationAndVolume}>
            <div className={styles.duration}>
              <span>
                {handleCalculateDuration(currentTime)} /{" "}
                {handleCalculateDuration(duration)}
              </span>
            </div>
            <div className={styles.volume}>
              <img
                className={styles.volumeIcon}
                onClick={handleToggleMuteAudio}
                src={volumeIcon}
                alt="volume icon"
              />
              <div
                ref={volumeRef}
                className={styles.volumeProgress}
                onMouseDown={handleChangeVolume}
                onMouseUp={handleChangeVolume}
              >
                <div
                  className={styles.currentVolume}
                  style={{
                    width: `${volume * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
