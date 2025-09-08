import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './StorySection.module.css';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  start: boolean;
  onComplete?: () => void;
  showCursor?: boolean;
}

const TypewriterText = ({
  text,
  speed = 80,
  start,
  onComplete,
  showCursor = true,
}: TypewriterTextProps) => {
  const controls = useAnimationControls();
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!start) {
      setIsTypingComplete(false);
      setHasAnimated(false);
      controls.set({ opacity: 0 });
      return;
    }

    if (hasAnimated) {
      return;
    }

    const animateTyping = async () => {
      setHasAnimated(true);
      await controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * (speed / 1000) },
      }));
      setIsTypingComplete(true);
      onComplete?.();
    };

    animateTyping();
  }, [start, controls, speed, hasAnimated, onComplete]);

  return (
    <span>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial={{ opacity: 0 }}
          animate={controls}
          className={styles.typewriterChar}
        >
          {char}
        </motion.span>
      ))}
      {isTypingComplete && showCursor && (
        <motion.span
          className={styles.cursor}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default TypewriterText;
