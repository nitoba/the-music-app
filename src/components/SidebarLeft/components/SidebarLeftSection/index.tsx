import { ReactNode } from "react";
import styles from "./styles.module.scss";

type SidebarLeftSectionProps = {
  title?: string;
  children: ReactNode;
};

export function SidebarLeftSection({
  title,
  children,
}: SidebarLeftSectionProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>{!!title && <h2>{title}</h2>}</header>
      <main className={styles.sectionMainContent}>{children}</main>
    </section>
  );
}
