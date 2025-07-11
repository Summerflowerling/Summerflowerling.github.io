import { motion, AnimatePresence, type Variants } from 'framer-motion';
import BookItem from '../components/BookItem';
import Header from '../components/Header';
import WorkExperienceItem from '../components/WorkExperienceItem';
import { books, workExperiences } from '../const/aboutMeData';
import styles from './About.module.css';

const About = () => {
  const introVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const workVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const bookVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Header />
      <main className={styles.aboutMePage}>
        <motion.div
          className={styles.aboutMeIntro}
          initial='hidden'
          animate='visible'
          variants={introVariants}
        >
          <motion.h1 variants={introVariants}>
            I'm Yuling, a Frontend Engineer passionate about crafting
            responsive, user-friendly web and mobile interfaces.
          </motion.h1>
          <motion.h1 variants={introVariants}>
            With expertise in React, TypeScript, and Preact, I build seamless
            experiences and advocate for clean, testable code. In my free time,
            I love reading, painting, and volunteering to support mental health
            through Lifeline.
          </motion.h1>
        </motion.div>

        <div>
          <motion.h1
            className={styles.aboutMeSectionTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                viewport={{ once: true, amount: 0.5 }}
                variants={workVariants}
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

        <div>
          <motion.h1
            className={styles.aboutMeSectionTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>Currently reading</span>
          </motion.h1>
          <div className={styles.bookList}>
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                whileHover='hover'
                variants={bookVariants}
              >
                <BookItem
                  title={book.title}
                  subtitle={book.subtitle}
                  image={book.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
