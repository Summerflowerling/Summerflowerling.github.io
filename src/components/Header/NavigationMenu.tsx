import { motion } from 'framer-motion';
import type { Section } from '../../const/headerData';
import { HEADER_ANIMATIONS } from '../../const/headerData';
import styles from '../Header.module.css';

interface NavigationMenuProps {
  sections: Section[];
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  isVisible: boolean;
  onStopPropagation: (e: React.MouseEvent) => void;
}

export const NavigationMenu = ({
  sections,
  currentSection,
  onNavigate,
  isVisible,
  onStopPropagation,
}: NavigationMenuProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <motion.ul
      className={styles.navList}
      variants={HEADER_ANIMATIONS.navList}
      initial='header'
      animate='header'
      onClick={onStopPropagation}
    >
      {sections.map((section) => {
        const IconComponent = section.icon;
        return (
          <li
            key={section.id}
            className={currentSection === section.id ? styles.currentPage : ''}
          >
            <button
              onClick={() => onNavigate(section.id)}
              aria-label={section.ariaLabel}
              className={styles.navButton}
            >
              <span className={styles.navIcon}>
                <IconComponent size={20} strokeWidth={2} />
              </span>
              <span className={styles.navText}>{section.name}</span>
            </button>
          </li>
        );
      })}
    </motion.ul>
  );
};
