import styles from '../Header.module.css';

interface BurgerMenuProps {
  isVisible: boolean;
  onClick: (e: React.MouseEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const BurgerMenu = ({
  isVisible,
  onClick,
  onKeyDown,
}: BurgerMenuProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={styles.burgerMenuFixed}
      onClick={onClick}
      role='button'
      aria-label='Open navigation menu'
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className={styles.burgerLine}></div>
      <div className={styles.burgerLine}></div>
      <div className={styles.burgerLine}></div>
    </div>
  );
};
