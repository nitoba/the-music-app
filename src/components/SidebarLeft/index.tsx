import logo from "../../assets/logo.svg";
import { HomeIcon } from "../../components/Icons/home";
import { DiscoverIcon } from "../../components/Icons/discover";
import { SidebarLeftItem } from "./components/SidebarLeftItem";
import { SidebarLeftSection } from "./components/SidebarLeftSection";

import styles from "./styles.module.scss";
import { RadioIcon } from "../Icons/radio";
import { AlbumsIcon } from "../Icons/albums";
import { MicIcon } from "../Icons/mic";
import { MusicPlaylistIcon } from "../Icons/music-playlist";

export function SidebarLeft() {
  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Music logo image" />
      </header>
      <main className={styles.sidebarContent}>
        <SidebarLeftSection>
          <SidebarLeftItem title="Home" isSelected={true} icon={<HomeIcon />} />
          <SidebarLeftItem
            title="Discover"
            isSelected={false}
            icon={<DiscoverIcon />}
          />
          <SidebarLeftItem
            title="Radio"
            isSelected={false}
            icon={<RadioIcon />}
          />
          <SidebarLeftItem
            title="Albums"
            isSelected={false}
            icon={<AlbumsIcon />}
          />
          <SidebarLeftItem
            title="Podcast"
            isSelected={false}
            icon={<MicIcon />}
          />
        </SidebarLeftSection>

        <SidebarLeftSection title="LIBRARY">
          <SidebarLeftItem
            title="Recently Added"
            isSelected={false}
            icon={<HomeIcon />}
          />
          <SidebarLeftItem
            title="Favorite Songs"
            isSelected={false}
            icon={<DiscoverIcon />}
          />
          <SidebarLeftItem
            title="Local Files"
            isSelected={false}
            icon={<RadioIcon />}
          />
        </SidebarLeftSection>

        <SidebarLeftSection title="PLAYLISTS">
          <SidebarLeftItem
            title="Lo-fi Music"
            isSelected={false}
            icon={<MusicPlaylistIcon />}
          />
          <SidebarLeftItem
            title="Best of Bon Jovi"
            isSelected={false}
            icon={<MusicPlaylistIcon />}
          />
          <SidebarLeftItem
            title="Best of John Mayer"
            isSelected={false}
            icon={<MusicPlaylistIcon />}
          />
        </SidebarLeftSection>
      </main>
    </aside>
  );
}
