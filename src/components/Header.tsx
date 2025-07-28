import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
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

  const logoContainerVariants: Variants = {
    header: {
      height: '5rem',
      width: '50%',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const navListVariants = {
    header: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.6,
      },
    },
  };

  return (
    <motion.div
      className={`${styles.navBox} ${scrolled ? styles.scrolled : ''}`}
      animate='header'
      variants={logoContainerVariants}
      initial='header'
    >
      <motion.h1
        className={styles.logo}
        variants={logoVariants}
        initial='visible'
        animate='visible'
      >
        {'Yuling'.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.ul
        className={styles.navList}
        variants={navListVariants}
        initial='header'
        animate='header'
      >
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
      </motion.ul>
    </motion.div>
  );
};

export default Header;
