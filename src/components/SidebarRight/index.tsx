import { ProfileUser } from "./components/ProfileUser";
import { FansLikeSection } from "./components/FansLikeSection";
import { RecentlyPlayedItem } from "./components/RecentlyPlayedItem";
import { RecentlyPlayedSection } from "./components/RecentlyPlayedSection";
import styles from "./styles.module.scss";

export function SidebarRight() {
  return (
    <aside className={styles.container}>
      <ProfileUser
        className={styles.profileContainer}
        name="Bruno Alves"
        avatarUrl="https://github.com/NitoBa.png"
        premium
      />

      <main className={styles.sidebarContent}>
        <FansLikeSection />
        <RecentlyPlayedSection
          className={styles.recentlyPlayedSection}
          title="Recent Played"
        >
          <RecentlyPlayedItem
            title="Perfect"
            artist="Ed Sheeran"
            imageUrl="https://source.unsplash.com/random"
            time="2min ago"
          />

          <RecentlyPlayedItem
            title="Perfect"
            artist="Ed Sheeran"
            imageUrl="https://source.unsplash.com/random"
            time="2min ago"
          />

          <RecentlyPlayedItem
            title="Perfect"
            artist="Ed Sheeran"
            imageUrl="https://source.unsplash.com/random"
            time="2min ago"
          />
          <RecentlyPlayedItem
            title="Perfect"
            artist="Ed Sheeran"
            imageUrl="https://source.unsplash.com/random"
            time="2min ago"
          />
          <RecentlyPlayedItem
            title="Perfect"
            artist="Ed Sheeran"
            imageUrl="https://source.unsplash.com/random"
            time="2min ago"
          />
          <RecentlyPlayedItem
            title="Perfect"
            artist="Ed Sheeran"
            imageUrl="https://source.unsplash.com/random"
            time="2min ago"
          />
          <RecentlyPlayedItem
            title="Perfect"
            artist="Ed Sheeran"
            imageUrl="https://source.unsplash.com/random"
            time="2min ago"
          />
          <RecentlyPlayedItem
            title="Perfect"
            artist="Ed Sheeran"
            imageUrl="https://source.unsplash.com/random"
            time="2min ago"
          />
        </RecentlyPlayedSection>
      </main>
    </aside>
  );
}
