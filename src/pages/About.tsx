import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import Header from '../components/Header';
import WorkExperienceItem from '../components/WorkExperienceItem';
import BookCarousel from '../components/BookCarousel';
import { workExperiences } from '../const/aboutMeData';
import styles from './About.module.css';
import { useRef } from 'react';

// Utility to split text into words for staggered animation
const splitText = (text: string) =>
  text.split(' ').map((word, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20, rotateX: -10 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: { duration: 0.5, delay: index * 0.05, ease: 'easeOut' },
        },
      }}
      style={{ display: 'inline-block', marginRight: '0.2em' }}
      whileHover={{ rotateY: 5, transition: { duration: 0.2 } }}
    >
      {word}
    </motion.span>
  ));

const About = () => {
  // Refs for scroll-based animations
  const bookRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);

  // Scroll progress for book section
  const { scrollYProgress: bookScrollYProgress } = useScroll({
    target: bookRef,
    offset: ['start end', 'end start'],
  });
  const bookScale = useTransform(bookScrollYProgress, [0, 1], [0.9, 1.1]);
  const bookOpacity = useTransform(bookScrollYProgress, [0, 1], [0.7, 1]);
  const bookRotateY = useTransform(bookScrollYProgress, [0, 1], [-10, 10]);

  // Scroll progress for work section
  const { scrollYProgress: workScrollYProgress } = useScroll({
    target: workRef,
    offset: ['start end', 'end start'],
  });
  const workParallaxY = useTransform(workScrollYProgress, [0, 1], [20, -20]);

  // Intro variants for staggered text animation
  const introVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  // Work experience variants with spring and 3D effects
  const workVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 80,
      },
    }),
  };

  // Book carousel item variants
  const bookVariants: Variants = {
    hidden: { opacity: 0, rotateY: -30, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 60,
      },
    },
  };

  return (
    <>
      <Header />
      <main className={styles.aboutMePage}>
        {/* Intro Section with Staggered Text and Gradient */}
        <motion.div
          className={styles.aboutMeIntro}
          initial='hidden'
          animate='visible'
          variants={introVariants}
        >
          <motion.h1 variants={introVariants}>
            {splitText(
              "I'm Yuling, a Frontend Engineer passionate about crafting responsive, user-friendly web and mobile interfaces.",
            )}
          </motion.h1>
          <motion.h1 variants={introVariants}>
            {splitText(
              'With expertise in React, TypeScript, and Preact, I build seamless experiences and advocate for clean, testable code. In my free time, I love reading, painting, and volunteering to support mental health through Lifeline.',
            )}
          </motion.h1>
        </motion.div>

        {/* Work Experience Section with Parallax and Card Effects */}
        <div ref={workRef}>
          <motion.h1
            className={styles.aboutMeSectionTitle}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <span>Work Experience</span>
          </motion.h1>
          <AnimatePresence>
            {workExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={workVariants}
                style={{ y: workParallaxY }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  transition: { duration: 0.2 },
                }}
              >
                <WorkExperienceItem
                  title={experience.title}
                  description={experience.description}
                  years={experience.years}
                  colorClass={experience.colorClass}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Book Carousel Section with 3D Scroll Effects */}
        <motion.div
          ref={bookRef}
          className={`${styles.bookSection} ${
            bookScrollYProgress.get() > 0.3
              ? styles.bookSectionActive
              : styles.bookSectionInactive
          }`}
          style={{
            scale: bookScale,
            opacity: bookOpacity,
            rotateY: bookRotateY,
          }}
          initial='hidden'
          whileInView='visible'
          variants={bookVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.carouselWrapper}>
            <BookCarousel />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default About;
