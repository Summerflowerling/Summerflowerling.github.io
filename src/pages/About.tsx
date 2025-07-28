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
    offset: ['start center', 'end center'],
  });

  const { scrollYProgress: bookScrollYProgress } = useScroll({
    target: bookRef,
    offset: ['start end', 'end start'],
  });

  // Transform values for timeline line extension
  const timelineLineHeight = useTransform(
    timelineScrollYProgress,
    [0, 0.9],
    ['0%', '100%'],
  );

  const timelineOpacity = useTransform(
    timelineScrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.8],
  );

  // Create transforms for each timeline item
  const item0Opacity = useTransform(
    timelineScrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );
  const item0X = useTransform(timelineScrollYProgress, [0, 0.2], [-20, 0]);
  const item0Scale = useTransform(timelineScrollYProgress, [0, 0.2], [0.9, 1]);

  const item1Opacity = useTransform(
    timelineScrollYProgress,
    [0.1, 0.25, 0.9, 1],
    [0, 1, 1, 0],
  );
  const item1X = useTransform(timelineScrollYProgress, [0.1, 0.35], [-20, 0]);
  const item1Scale = useTransform(
    timelineScrollYProgress,
    [0.1, 0.35],
    [0.9, 1],
  );

  const item2Opacity = useTransform(
    timelineScrollYProgress,
    [0.25, 0.4, 0.95, 1],
    [0, 1, 1, 0],
  );
  const item2X = useTransform(timelineScrollYProgress, [0.25, 0.5], [-20, 0]);
  const item2Scale = useTransform(
    timelineScrollYProgress,
    [0.25, 0.5],
    [0.9, 1],
  );

  const item3Opacity = useTransform(
    timelineScrollYProgress,
    [0.4, 0.55, 1, 1],
    [0, 1, 1, 0],
  );
  const item3X = useTransform(timelineScrollYProgress, [0.4, 0.65], [-20, 0]);
  const item3Scale = useTransform(
    timelineScrollYProgress,
    [0.4, 0.65],
    [0.9, 1],
  );

  const item4Opacity = useTransform(
    timelineScrollYProgress,
    [0.55, 0.7, 1, 1],
    [0, 1, 1, 0],
  );
  const item4X = useTransform(timelineScrollYProgress, [0.55, 0.8], [-20, 0]);
  const item4Scale = useTransform(
    timelineScrollYProgress,
    [0.55, 0.8],
    [0.9, 1],
  );

  // Array of transforms for easy access
  const itemTransforms = [
    { opacity: item0Opacity, x: item0X, scale: item0Scale },
    { opacity: item1Opacity, x: item1X, scale: item1Scale },
    { opacity: item2Opacity, x: item2X, scale: item2Scale },
    { opacity: item3Opacity, x: item3X, scale: item3Scale },
    { opacity: item4Opacity, x: item4X, scale: item4Scale },
  ];

  // Create year-specific transforms with slightly earlier fade in for staggered effect
  const year0Opacity = useTransform(
    timelineScrollYProgress,
    [0, 0.1, 0.8, 0.95],
    [0, 1, 1, 0],
  );
  const year1Opacity = useTransform(
    timelineScrollYProgress,
    [0.05, 0.2, 0.85, 1],
    [0, 1, 1, 0],
  );
  const year2Opacity = useTransform(
    timelineScrollYProgress,
    [0.2, 0.35, 0.9, 1],
    [0, 1, 1, 0],
  );
  const year3Opacity = useTransform(
    timelineScrollYProgress,
    [0.35, 0.5, 0.95, 1],
    [0, 1, 1, 0],
  );
  const year4Opacity = useTransform(
    timelineScrollYProgress,
    [0.5, 0.65, 1, 1],
    [0, 1, 1, 0],
  );

  const yearTransforms = [
    year0Opacity,
    year1Opacity,
    year2Opacity,
    year3Opacity,
    year4Opacity,
  ];

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
        <section
          ref={timelineRef}
          className={styles.timelineSection}
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
              style={{
                height: timelineLineHeight,
                opacity: timelineOpacity,
              }}
              aria-hidden='true'
            />

            <AnimatePresence>
              {workExperiences.map((experience, index) => {
                const transforms = itemTransforms[index] || itemTransforms[0];
                const yearOpacity = yearTransforms[index] || yearTransforms[0];

                return (
                  <motion.div
                    key={experience.id}
                    className={styles.timelineItem}
                    style={{
                      opacity: transforms.opacity,
                      x: transforms.x,
                      scale: transforms.scale,
                    }}
                    role='article'
                    aria-label={`Work experience: ${experience.title}`}
                    tabIndex={0}
                  >
                    <div className={styles.timelineMarker} aria-hidden='true' />
                    <div className={styles.timelineContent}>
                      <motion.div
                        className={`${styles.timelineYear} ${
                          styles[
                            `timelineYear${experience.colorClass.slice(-1)}`
                          ]
                        }`}
                        style={{ opacity: yearOpacity }}
                      >
                        {experience.years}
                      </motion.div>
                      <MemoizedWorkExperienceItem
                        title={experience.title}
                        description={experience.description}
                        colorClass={experience.colorClass}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

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
