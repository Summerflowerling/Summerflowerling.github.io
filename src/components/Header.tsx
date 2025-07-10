import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`${styles.navBox} ${scrolled ? styles.scrolled : ''}`}>
      <h1 className={styles.logo}>Yuling</h1>
      <ul className={styles.navList}>
        <li
          className={location.pathname === '/about' ? styles.currentPage : ''}
        >
          <Link to='/about'>About me</Link>
        </li>
        <li
          className={location.pathname === '/gallery' ? styles.currentPage : ''}
        >
          <Link to='/gallery'>Gallery</Link>
        </li>
        <li
          className={location.pathname === '/contact' ? styles.currentPage : ''}
        >
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
