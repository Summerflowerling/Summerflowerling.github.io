import { memo, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import Header from '../components/Header';
import StorySection from '../components/StorySection';
import WorkExperienceItem from '../components/WorkExperienceItem';
import BookCarousel from '../components/BookCarousel';
import { workExperiences } from '../const/aboutMeData';
import styles from './About.module.css';

// Memoized WorkExperienceItem for performance
const MemoizedWorkExperienceItem = memo(WorkExperienceItem);

const About = () => {
  // Refs for sections
  const timelineRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  // Scroll progress for sections
  const { scrollYProgress: timelineScrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: bookScrollYProgress } = useScroll({
    target: bookRef,
    offset: ['start end', 'end start'],
  });

  // Transform values for parallax and effects
  const timelineScale = useTransform(
    timelineScrollYProgress,
    [0, 0.5, 1],
    [0.9, 1, 1.1],
  );
  const timelineOpacity = useTransform(
    timelineScrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.7],
  );

  const bookScale = useTransform(
    bookScrollYProgress,
    [0, 0.5, 1],
    [0.9, 1, 1.1],
  );
  const bookOpacity = useTransform(
    bookScrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.8],
  );

  // Animation variants
  const timelineVariants: Variants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const timelineItemVariants: Variants = {
    hidden: { opacity: 0, x: -50, rotateY: -15 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 80,
      },
    }),
  };

  const bookVariants: Variants = {
    hidden: { opacity: 0, rotateY: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 60,
      },
    },
  };

  return (
    <>
      <Header />
      <main
        className={styles.aboutMePage}
        role='main'
        aria-label='About Yuling'
      >
        {/* Section 1: Interactive Story */}
        <StorySection />

        {/* Section 2: Work Experience Timeline */}
        <motion.section
          ref={timelineRef}
          className={styles.timelineSection}
          style={{
            scale: timelineScale,
            opacity: timelineOpacity,
          }}
          aria-label='Work experience timeline'
        >
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Professional Timeline
          </motion.h2>

          <div className={styles.timelineContainer}>
            <motion.div
              className={styles.timelineLine}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={timelineVariants}
              aria-hidden='true'
            />

            <AnimatePresence>
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className={styles.timelineItem}
                  custom={index}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.3 }}
                  variants={timelineItemVariants}
                  role='article'
                  aria-label={`Work experience: ${experience.title}`}
                  tabIndex={0}
                >
                  <div className={styles.timelineMarker} aria-hidden='true' />
                  <MemoizedWorkExperienceItem
                    title={experience.title}
                    description={experience.description}
                    years={experience.years}
                    colorClass={experience.colorClass}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Section 3: Hobbies with BookCarousel */}
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Currently Reading
        </motion.h2>
        <motion.section
          ref={bookRef}
          className={styles.bookSection}
          style={{
            scale: bookScale,
            opacity: bookOpacity,
          }}
          initial='hidden'
          whileInView='visible'
          variants={bookVariants}
          viewport={{ once: true, amount: 0.3 }}
          aria-label='My hobbies and interests'
        >
          <div className={styles.carouselWrapper}>
            <BookCarousel />
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default About;
