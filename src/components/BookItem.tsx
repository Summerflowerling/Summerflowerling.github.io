import type { FC } from 'react';
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

const BookItem: FC<BookItemProps> = ({
  title,
  subtitle,
  image,
  review,
  isHovered,
  onAmazonClick,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  const reviewVariants: Variants = {
    hidden: {
      opacity: 0,
      y: '100%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className={styles.bookItem}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }}
    >
      <motion.div
        className={styles.contentContainer}
        initial='visible'
        animate='visible'
        variants={contentVariants}
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
        animate={isHovered && !isMobile ? 'visible' : 'hidden'}
        variants={reviewVariants}
      >
        <p className={styles.reviewText}>{review}</p>
        {!isMobile && onAmazonClick && (
          <button
            className={styles.amazonButton}
            onClick={onAmazonClick}
            aria-label={`View ${title} on Amazon`}
          >
            View on Amazon
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BookItem;
