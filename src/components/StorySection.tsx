import { useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { storyContent } from '../const/storyData';
import styles from './StorySection.module.css';

const StorySection = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const restOfStoryRef = useRef<HTMLDivElement>(null);

  const storyVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const firstSentenceVariants: Variants = {
    hidden: { opacity: 1, y: 0, scale: 1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0,
        ease: 'easeOut',
      },
    },
  };

  const restOfStoryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 1,
      },
    },
  };

  const getHighlightedText = (text: string) => {
    let result = text;
    storyContent.keyPhrases.forEach((phrase) => {
      const regex = new RegExp(
        phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
        'gi',
      );
      result = result.replace(
        regex,
        `<span class="${styles.highlight}">${phrase}</span>`,
      );
    });
    return result;
  };

  return (
    <motion.section
      ref={storyRef}
      className={styles.storySection}
      initial='hidden'
      animate='visible'
      variants={storyVariants}
      aria-label='My professional journey'
    >
      <div className={styles.storyContainer}>
        <motion.p
          className={`${styles.storyParagraph} ${styles.firstSentence} story-first-sentence`}
          initial='hidden'
          animate='visible'
          variants={firstSentenceVariants}
          aria-live='polite'
          aria-label='My coding journey introduction'
        >
          <span className={styles.typingText}>
            {storyContent.firstSentence}
          </span>
        </motion.p>

        <motion.div
          ref={restOfStoryRef}
          className={styles.restOfStory}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={restOfStoryVariants}
          aria-label='My coding journey continued'
        >
          <p className={styles.storyParagraph}>
            <span
              dangerouslySetInnerHTML={{
                __html: getHighlightedText(storyContent.restOfStory),
              }}
            />
            <span> {storyContent.lastWords}</span>
            <motion.span
              className={styles.cursor}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: 'easeInOut',
                delay: 1.2,
              }}
            >
              |
            </motion.span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
