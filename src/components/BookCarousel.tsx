import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import BookItem from './BookItem';
import { books } from '../const/aboutMeData';
import styles from './BookCarousel.module.css';

interface Book {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  review: string;
  amazonLink: string;
}

const BookCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showReview, setShowReview] = useState<Book | null>(null);

  const canHover = useMediaQuery({ query: '(hover: hover)' });

  const handleBookTap = (
    index: number,
    book: Book,
    event?: MouseEvent | TouchEvent | PointerEvent,
  ) => {
    if (
      event &&
      'stopPropagation' in event &&
      typeof event.stopPropagation === 'function'
    ) {
      event.stopPropagation();
    }
    if (!canHover) {
      if (showReview?.id === book.id) {
        setShowReview(null);
      } else {
        setSelectedIndex(index);
        setShowReview(book);
      }
    }
  };

  const handleBookHover = (index: number, book: Book) => {
    if (canHover) {
      setSelectedIndex(index);
      setShowReview(book);
    }
  };

  const handleBookLeave = () => {
    if (canHover) {
      setShowReview(null);
    }
  };

  const handleBookFocus = (index: number, book: Book) => {
    setSelectedIndex(index);
    setShowReview(book);
  };

  const handleBookBlur = () => {
    if (!canHover) {
      setShowReview(null);
    }
  };

  const handleAmazonClick = (book: Book) => {
    if (book.amazonLink) {
      window.open(book.amazonLink, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: canHover ? 50 : 30,
      scale: canHover ? 0.8 : 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: canHover ? 0.8 : 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const bookVariants: Variants = {
    active: {
      scale: canHover ? 1 : 1.1,
      opacity: 1,
      y: canHover ? 0 : -10,
      zIndex: 10,
      transition: { duration: canHover ? 0.6 : 0.4, ease: 'easeOut' },
    },
    inactive: {
      scale: canHover ? 0.8 : 0.85,
      opacity: canHover ? 0.6 : 0.5,
      y: 0,
      zIndex: 1,
      transition: { duration: canHover ? 0.6 : 0.4, ease: 'easeOut' },
    },
    hover: {
      scale: canHover ? 1.05 : 1.1,
      opacity: 1,
      y: canHover ? 0 : -10,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const reviewVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  return (
    <motion.div
      className={styles.carouselContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      data-in-view='true'
    >
      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              className={styles.carouselItem}
              variants={bookVariants}
              initial='inactive'
              animate={selectedIndex === index ? 'active' : 'inactive'}
              whileHover={canHover ? 'hover' : undefined}
              onTap={(e) => handleBookTap(index, book, e)}
              onMouseEnter={() => handleBookHover(index, book)}
              onMouseLeave={handleBookLeave}
              onFocus={() => handleBookFocus(index, book)}
              onBlur={handleBookBlur}
              tabIndex={0}
              role='button'
              aria-label={`Select ${book.title} for review`}
              data-active={selectedIndex === index}
            >
              <BookItem
                title={book.title}
                subtitle={book.subtitle}
                image={book.image}
                review={book.review}
                isHovered={showReview?.id === book.id}
                onAmazonClick={() => handleAmazonClick(book)}
              />
              <AnimatePresence>
                {showReview?.id === book.id && !canHover && (
                  <motion.div
                    className={styles.reviewOverlay}
                    variants={reviewVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    role='dialog'
                    aria-label={`Review for ${book.title}`}
                  >
                    <p>{book.review}</p>
                    <div className={styles.buttonContainer}>
                      <button
                        className={styles.amazonButton}
                        onClick={() => handleAmazonClick(book)}
                        aria-label={`View ${book.title} on Amazon`}
                      >
                        View on Amazon
                      </button>
                      <button
                        className={styles.closeButton}
                        onClick={() => setShowReview(null)}
                        aria-label='Close review'
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BookCarousel;
