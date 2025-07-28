import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import styles from './Header.module.css';

// Define sections for smooth scroll navigation
const SECTIONS = [
  { id: 'about', name: 'About me' },
  { id: 'gallery', name: 'Gallery' },
  { id: 'contact', name: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setExpanded(false); // Close menu after navigation

      // After navigation, check if we should hide the header
      // Use a timeout to wait for the scroll to complete
      setTimeout(() => {
        setScrolled(window.scrollY > 100);
      }, 500);
    }
  };

  // Set up scroll listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // If menu is expanded and user scrolls, collapse it
      if (expanded) {
        setExpanded(false);
      }

      // Update scrolled state based on scroll position
      // Only when menu is not expanded to avoid conflicts
      if (!expanded) {
        setScrolled(scrollY > 100); // Hide header after scrolling 100px
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded]);

  // Set up IntersectionObserver to track section visibility for navigation highlighting
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

    // Observe all sections
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      SECTIONS.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Handle header click to collapse expanded menu
  const handleHeaderClick = () => {
    if (expanded) {
      setExpanded(false);
      // After collapsing, check scroll position to determine if header should be hidden
      setScrolled(window.scrollY > 100);
    }
  };

  // Handle burger menu click to expand
  const handleBurgerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    // Prevent multiple clicks by checking if already expanded
    if (expanded) {
      return;
    }

    setExpanded(true);
    setScrolled(false); // Show full header when expanding
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
      {/* Main Header - hidden when scrolled */}
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

        {/* Navigation - visible when not scrolled OR when expanded */}
        {(!scrolled || expanded) && (
          <motion.ul
            className={styles.navList}
            variants={navListVariants}
            initial='header'
            animate='header'
            onClick={(e) => e.stopPropagation()}
          >
            {SECTIONS.map((section) => (
              <li
                key={section.id}
                className={
                  currentSection === section.id ? styles.currentPage : ''
                }
              >
                <button onClick={() => scrollToSection(section.id)}>
                  {section.name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </motion.div>

      {/* Separate Burger Menu - only visible when scrolled AND not expanded */}
      {scrolled && !expanded && (
        <div className={styles.burgerMenuFixed} onClick={handleBurgerClick}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      )}
    </>
  );
};

export default Header;
