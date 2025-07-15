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
  const [hoveredBook, setHoveredBook] = useState<Book | null>(null);
  const [showReview, setShowReview] = useState<Book | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleBookTap = (index: number, book: Book) => {
    if (isMobile) {
      if (showReview?.id === book.id) {
        setShowReview(null);
      } else {
        setSelectedIndex(index);
        setShowReview(book);
      }
    } else {
      setSelectedIndex(index);
      setHoveredBook(book);
    }
  };

  const handleBookLeave = () => {
    if (!isMobile) {
      setHoveredBook(null);
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
      y: isMobile ? 30 : 50,
      scale: isMobile ? 0.9 : 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const bookVariants: Variants = {
    active: {
      scale: isMobile ? 1.1 : 1,
      opacity: 1,
      y: isMobile ? -10 : 0,
      zIndex: 10,
      transition: { duration: isMobile ? 0.4 : 0.6, ease: 'easeOut' },
    },
    inactive: {
      scale: isMobile ? 0.85 : 0.8,
      opacity: isMobile ? 0.5 : 0.6,
      y: 0,
      zIndex: 1,
      transition: { duration: isMobile ? 0.4 : 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: isMobile ? 1.1 : 1.05,
      opacity: 1,
      y: isMobile ? -10 : 0,
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
      <motion.h1 className={styles.sectionTitle} variants={containerVariants}>
        <span>Currently Reading</span>
      </motion.h1>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              className={styles.carouselItem}
              variants={bookVariants}
              initial='inactive'
              animate={selectedIndex === index ? 'active' : 'inactive'}
              whileHover={!isMobile ? 'hover' : undefined}
              onTap={() => handleBookTap(index, book)}
              onMouseEnter={() => !isMobile && handleBookTap(index, book)}
              onMouseLeave={handleBookLeave}
              onClick={() => !isMobile && handleAmazonClick(book)}
              data-active={selectedIndex === index}
            >
              <BookItem
                title={book.title}
                subtitle={book.subtitle}
                image={book.image}
                review={book.review}
                isHovered={hoveredBook?.id === book.id}
              />
              <AnimatePresence>
                {isMobile && showReview?.id === book.id && (
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
