import { motion, type Variants, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 48rem)' });
  const aboutAnimationControls = useAnimation();
  const galleryAnimationControls = useAnimation();
  const contactAnimationControls = useAnimation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const VIEWPORT_THRESHOLD = 0.5;

  useEffect(() => {
    if (aboutRef.current) {
      aboutAnimationControls.start('visible');
    }
  }, [aboutAnimationControls]);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const aboutVariants: Variants = {
    hidden: { opacity: 1, x: 0, rotateY: 0 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.3,
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

  useEffect(() => {
    const checkVisibility = (
      ref: React.RefObject<HTMLDivElement | null>,
      control: ReturnType<typeof useAnimation>,
    ) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInView =
          rect.top >= 0 && rect.top < window.innerHeight * VIEWPORT_THRESHOLD;
        if (isInView && !isMobile) {
          control.start('visible');
        }
      }
    };

    const handleScroll = () => {
      checkVisibility(galleryRef, galleryAnimationControls);
      checkVisibility(contactRef, contactAnimationControls);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, galleryAnimationControls, contactAnimationControls]);

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
          animate={isMobile ? 'visible' : aboutAnimationControls}
          style={{ position: 'relative' }}
        >
          <About />
        </motion.div>

        <motion.div
          ref={galleryRef}
          id='gallery'
          variants={galleryVariants}
          initial={isMobile ? 'visible' : 'hidden'}
          animate={isMobile ? 'visible' : galleryAnimationControls}
          style={{ position: 'relative' }}
        >
          <Gallery />
        </motion.div>

        <motion.div
          ref={contactRef}
          id='contact'
          variants={contactVariants}
          initial={isMobile ? 'visible' : 'hidden'}
          animate={isMobile ? 'visible' : contactAnimationControls}
          style={{ position: 'relative' }}
        >
          <Contact />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomePage;
