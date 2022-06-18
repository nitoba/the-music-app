import { ReactElement, cloneElement } from "react";
import styles from "./styles.module.scss";

interface SidebarLeftItemProps {
  title: string;
  icon: ReactElement;
  isSelected: boolean;
}

export function SidebarLeftItem({
  title,
  icon,
  isSelected,
}: SidebarLeftItemProps) {
  return (
    <div className={`${styles.container} ${isSelected && styles.selected}`}>
      <div className={styles.icon}>
        {cloneElement(icon, { selected: isSelected })}
      </div>
      <span className={`${styles.title}`}>{title}</span>
    </div>
  );
}
