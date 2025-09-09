import { useEffect, type FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import styles from './BookItem.module.css';

interface BookItemProps {
  title: string;
  subtitle: string;
  image: string;
  review: string;
  isHovered: boolean;
  onAmazonClick?: () => void;
}

const ANIMATION_DURATION = 0.4;
const ANIMATION_EASE = 'easeInOut';

const IPAD_MINI_MIN_WIDTH = 24; // rem
const IPAD_MINI_MAX_WIDTH = 29.9375; // rem
const IPAD_AIR_MIN_WIDTH = 37.5; // rem
const IPAD_AIR_MAX_WIDTH = 47.9375; // rem

const BookItem: FC<BookItemProps> = ({
  title,
  subtitle,
  image,
  review,
  isHovered,
  onAmazonClick,
}) => {
  const canHover = useMediaQuery({ query: '(hover: hover)' });
  const isIPadMini = useMediaQuery({
    minWidth: IPAD_MINI_MIN_WIDTH,
    maxWidth: IPAD_MINI_MAX_WIDTH,
  });
  const isIPadAir = useMediaQuery({
    minWidth: IPAD_AIR_MIN_WIDTH,
    maxWidth: IPAD_AIR_MAX_WIDTH,
  });

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const reviewVariants: Variants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: 0 },
  };

  const bookItemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: isIPadMini || isIPadAir ? 0.9 : 0.8, // Conservative scale for both iPad types
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: ANIMATION_DURATION,
        ease: ANIMATION_EASE,
        scale: {
          type: 'spring',
          damping: isIPadMini || isIPadAir ? 28 : 20, // More damping for iPads
          stiffness: isIPadMini || isIPadAir ? 180 : 300, // Less stiffness for iPads
        },
      },
    },
  };

  useEffect(() => {
    console.log(`isHovered changed: ${isHovered}`);
  }, [isHovered]);

  return (
    <motion.div
      className={styles.bookItem}
      variants={bookItemVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className={styles.contentContainer}
        initial='visible'
        animate='visible'
        variants={contentVariants}
        transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
      >
        <div className={styles.bookImageContainer}>
          <img src={image} alt={title} className={styles.bookImage} />
        </div>
        <h3 className={styles.bookTitle}>{title}</h3>
        <p className={styles.bookSubtitle}>{subtitle}</p>
      </motion.div>

      <motion.div
        className={styles.reviewContainer}
        initial='hidden'
        animate={canHover && isHovered ? 'visible' : 'hidden'} // Show review only on hover-capable devices when isHovered is true
        variants={reviewVariants}
        transition={{
          duration: ANIMATION_DURATION - 0.1,
          ease: ANIMATION_EASE,
        }}
      >
        <p className={styles.reviewText}>{review}</p>
        {canHover &&
          onAmazonClick && ( // Show Amazon button only on hover-capable devices
            <button
              className={styles.amazonButton}
              onClick={onAmazonClick}
              aria-label={`View ${title} on Amazon`}
              role='button'
            >
              View on Amazon
            </button>
          )}
      </motion.div>
    </motion.div>
  );
};

export default BookItem;
