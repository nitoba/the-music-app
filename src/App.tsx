import { MusicDashboard } from "./components/MusicDashboard";
import { MusicPlayer } from "./components/MusicPlayer";
import { SidebarLeft } from "./components/SidebarLeft";
import { SidebarRight } from "./components/SidebarRight";
import { MusicPlayerProvider } from "./contexts/music-player-context";

import styles from "./styles.module.scss";

export function App() {
  return (
    <MusicPlayerProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <SidebarLeft />
          <MusicDashboard />
          <SidebarRight />
        </div>
        <div className={styles.musicPlayer}>
          <MusicPlayer />
        </div>
      </div>
    </MusicPlayerProvider>
  );
}
