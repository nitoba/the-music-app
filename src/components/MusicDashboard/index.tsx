import styles from "./styles.module.scss";

import { Header } from "./components/Header";
import { BannerArtist } from "./components/BannerArtist";
import { Playlist } from "./components/Playlist";
import { PlaylistItem } from "./components/PlaylistItem";

export function MusicDashboard() {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <main className={styles.content}>
        <BannerArtist className={styles.bannerContainer} />
        <Playlist
          className={styles.playlistContainer}
          title="Popular"
          seeAll={() => {}}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <PlaylistItem
              key={number}
              isSelected={number === 1}
              number={number}
              title={`The best music of ${number}`}
              musicCount={Math.round(number * Math.random() * 100)}
              musicDurationInSeconds={Math.round(number * Math.random() * 100)}
              musicCover="https://source.unsplash.com/random"
              onClick={() => {}}
            />
          ))}
        </Playlist>
      </main>
    </div>
  );
}
