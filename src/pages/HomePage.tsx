import { motion, type Variants, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 48rem)' });
  const animationControls = useAnimation();
  const aboutRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;
  const galleryRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;
  const contactRef = useRef<HTMLDivElement>(
    null,
  ) as React.RefObject<HTMLDivElement>;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const aboutVariants: Variants = {
    hidden: { opacity: 0, x: -100, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const galleryVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const contactVariants: Variants = {
    hidden: { opacity: 0, y: 100, skewY: 5 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  // Custom scroll detection to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      const checkVisibility = (
        ref: React.RefObject<HTMLDivElement>,
        control: ReturnType<typeof useAnimation>,
      ) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView = rect.top >= 0 && rect.top < window.innerHeight * 0.5;
          if (isInView && !isMobile) {
            control.start('visible');
          }
        }
      };

      checkVisibility(aboutRef, animationControls);
      checkVisibility(galleryRef, animationControls);
      checkVisibility(contactRef, animationControls);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, animationControls]);

  return (
    <>
      <Header />
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        style={{ position: 'relative' }}
      >
        <motion.div
          ref={aboutRef}
          id='about'
          variants={aboutVariants}
          initial={isMobile ? 'visible' : 'hidden'}
          animate={isMobile ? 'visible' : animationControls}
          style={{ position: 'relative' }}
        >
          <About />
        </motion.div>

        <motion.div
          ref={galleryRef}
          id='gallery'
          variants={galleryVariants}
          initial={isMobile ? 'visible' : 'hidden'}
          animate={isMobile ? 'visible' : animationControls}
          style={{ position: 'relative' }}
        >
          <Gallery />
        </motion.div>

        <motion.div
          ref={contactRef}
          id='contact'
          variants={contactVariants}
          initial={isMobile ? 'visible' : 'hidden'}
          animate={isMobile ? 'visible' : animationControls}
          style={{ position: 'relative' }}
        >
          <Contact />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomePage;
