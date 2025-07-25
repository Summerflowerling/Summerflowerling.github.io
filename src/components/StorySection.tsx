// src/components/StorySection.tsx
import { useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { storyContent } from '../const/storyData';
import styles from './StorySection.module.css';
import TypewriterText from './TypeWriterText';

const StorySection = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const restOfStoryRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<
    'firstSentence' | 'restOfStory' | 'lastWords'
  >('firstSentence');

  const storyInView = useInView(storyRef, { amount: 0.3, once: true });

  const storyVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const restOfStoryVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  // Split restOfStory into segments for highlighting
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
      animate={storyInView ? 'visible' : 'hidden'}
      variants={storyVariants}
      aria-label='My professional journey'
    >
      <div className={styles.storyContainer}>
        <motion.p
          className={`${styles.storyParagraph} ${styles.firstSentence}`}
          aria-live='polite'
          aria-label='My coding journey introduction'
        >
          <TypewriterText
            text={storyContent.firstSentence}
            speed={80}
            start={storyInView}
            showCursor={phase === 'firstSentence'}
            onComplete={() => {
              setTimeout(() => {
                setPhase('restOfStory');
              }, 1000); // 1 second delay like before
            }}
          />
        </motion.p>

        {phase !== 'firstSentence' && (
          <motion.div
            ref={restOfStoryRef}
            className={styles.restOfStory}
            initial='hidden'
            animate='visible'
            variants={restOfStoryVariants}
            aria-label='My coding journey continued'
          >
            <p className={styles.storyParagraph}>
              <span
                dangerouslySetInnerHTML={{
                  __html: getHighlightedText(storyContent.restOfStory),
                }}
              />
              {phase === 'lastWords' ? (
                <TypewriterText
                  text={storyContent.lastWords}
                  speed={150}
                  start={true}
                />
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setPhase('lastWords');
                    }, 500);
                  }}
                >
                  {storyContent.lastWords}
                </motion.span>
              )}
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default StorySection;
