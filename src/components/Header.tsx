import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { SECTIONS, HEADER_ANIMATIONS } from '../const/headerData';
import styles from './Header.module.css';
import { useHeaderState } from '../hook/useHeaderState';
import { useNavigation } from '../hook/useNavigation';
import { AnimatedLogo } from './Header/AnimatedLogo';
import { NavigationMenu } from './Header/NavigationMenu';
import { BurgerMenu } from './Header/BurgerMenu';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Header = ({ currentSection, onSectionChange }: HeaderProps) => {
  const {
    scrolled,
    expanded,
    setExpanded,
    handleHeaderClick,
    handleBurgerClick,
  } = useHeaderState();
  const { navigateToSection } = useNavigation({
    currentSection,
    onSectionChange,
    setExpanded,
  });

  const handleStopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const headerClassName = `${styles.navBox} ${
    scrolled ? styles.scrolled : ''
  } ${expanded ? styles.expanded : ''}`;
  const headerCursor = expanded ? 'pointer' : 'default';
  const isNavigationVisible = !scrolled || expanded;
  const isBurgerVisible = scrolled && !expanded;

  return (
    <>
      <motion.div
        className={headerClassName}
        animate='header'
        variants={HEADER_ANIMATIONS.logoContainer}
        initial='header'
        onClick={handleHeaderClick}
        style={{ cursor: headerCursor }}
      >
        <AnimatedLogo className={styles.logo} />

        <NavigationMenu
          sections={SECTIONS}
          currentSection={currentSection}
          onNavigate={navigateToSection}
          isVisible={isNavigationVisible}
          onStopPropagation={handleStopPropagation}
        />
      </motion.div>

      <BurgerMenu
        isVisible={isBurgerVisible}
        onClick={handleBurgerClick}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            if (!expanded) {
              setExpanded(true);
            }
          }
        }}
      />
    </>
  );
};

export default Header;
