import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <div className="container">
      <div className={styles.navBox}>
        <h1 className={styles.logo}>Yuling</h1>
        <ul className={styles.navList}>
          <li className={location.pathname === '/about' ? styles.currentPage : ''}>
            <Link to="/about">About me</Link>
          </li>
          <li className={location.pathname === '/' ? styles.currentPage : ''}>
            <Link to="/">Gallery</Link>
          </li>
          <li className={location.pathname === '/contact' ? styles.currentPage : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
