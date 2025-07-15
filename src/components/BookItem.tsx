import { motion, type Variants } from 'framer-motion';
import styles from './BookItem.module.css';

interface BookItemProps {
  title: string;
  subtitle: string;
  image: string;
  review: string;
  isHovered: boolean;
}

const BookItem = ({
  title,
  subtitle,
  image,
  review,
  isHovered,
}: BookItemProps) => {
  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.4, ease: 'easeInOut' },
    }, // Slide up and out
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  const reviewVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.4, ease: 'easeInOut' },
    }, // Start below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeInOut' },
    }, // Slide up
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
        animate={isHovered ? 'hidden' : 'visible'}
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
        animate={isHovered ? 'visible' : 'hidden'}
        variants={reviewVariants}
      >
        <p className={styles.reviewText}>{review}</p>
      </motion.div>
    </motion.div>
  );
};

export default BookItem;
