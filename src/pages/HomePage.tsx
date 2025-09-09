import { motion, type Variants } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 48rem)' });
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
          id='about'
          variants={aboutVariants}
          initial={isMobile ? 'visible' : 'hidden'}
          animate={isMobile ? 'visible' : undefined}
          whileInView={isMobile ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
          style={{ position: 'relative' }}
        >
          <About />
        </motion.div>

        <motion.div
          id='gallery'
          variants={galleryVariants}
          initial={isMobile ? 'visible' : 'hidden'}
          animate={isMobile ? 'visible' : undefined}
          whileInView={isMobile ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
          style={{ position: 'relative' }}
        >
          <Gallery />
        </motion.div>

        <motion.div
          id='contact'
          variants={contactVariants}
          initial={isMobile ? 'visible' : 'hidden'}
          animate={isMobile ? 'visible' : undefined}
          whileInView={isMobile ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.1 }}
          style={{ position: 'relative' }}
        >
          <Contact />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomePage;
