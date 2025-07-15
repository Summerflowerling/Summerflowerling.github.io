// components/BookItem.tsx
import { motion, type Variants } from 'framer-motion';
import styles from './BookItem.module.css';

interface BookItemProps {
  title: string;
  subtitle: string;
  image: string;
}

const BookItem = ({ title, subtitle, image }: BookItemProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div className={styles.bookItem} variants={itemVariants}>
      <div className={styles.bookImageContainer}>
        <img src={image} alt={title} className={styles.bookImage} />
      </div>
      <h3 className={styles.bookTitle}>{title}</h3>
      <p className={styles.bookSubtitle}>{subtitle}</p>
    </motion.div>
  );
};

export default BookItem;
