import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

import styles from './Header.module.css';
import { SECTIONS } from '../const/header';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setExpanded(false);

      setTimeout(() => {
        setScrolled(window.scrollY > 100);
      }, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (expanded) {
        setExpanded(false);
      }

      if (!expanded) {
        setScrolled(scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px',
      },
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      SECTIONS.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleHeaderClick = () => {
    if (expanded) {
      setExpanded(false);
      setScrolled(window.scrollY > 100);
    }
  };

  const handleBurgerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (expanded) {
      return;
    }

    setExpanded(true);
    setScrolled(false);
  };

  const logoContainerVariants: Variants = {
    header: {
      height: '5rem',
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
    <>
      <motion.div
        className={`${styles.navBox} ${scrolled ? styles.scrolled : ''} ${
          expanded ? styles.expanded : ''
        }`}
        animate='header'
        variants={logoContainerVariants}
        initial='header'
        onClick={handleHeaderClick}
        style={{ cursor: expanded ? 'pointer' : 'default' }}
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

        {(!scrolled || expanded) && (
          <motion.ul
            className={styles.navList}
            variants={navListVariants}
            initial='header'
            animate='header'
            onClick={(e) => e.stopPropagation()}
          >
            {SECTIONS.map((section) => {
              const IconComponent = section.icon;
              return (
                <li
                  key={section.id}
                  className={
                    currentSection === section.id ? styles.currentPage : ''
                  }
                >
                  <button
                    onClick={() => scrollToSection(section.id)}
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
        )}
      </motion.div>

      {scrolled && !expanded && (
        <div
          className={styles.burgerMenuFixed}
          onClick={handleBurgerClick}
          role='button'
          aria-label='Open navigation menu'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              if (!expanded) {
                setExpanded(true);
                setScrolled(false);
              }
            }
          }}
        >
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      )}
    </>
  );
};

export default Header;
