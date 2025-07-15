import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';
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

  const handleBookHover = (index: number, book: Book) => {
    setSelectedIndex(index);
    setHoveredBook(book);
  };

  const handleBookLeave = () => {
    setHoveredBook(null);
  };

  const handleBookClick = (book: Book) => {
    if (book.amazonLink) {
      window.open(book.amazonLink, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const bookVariants: Variants = {
    active: {
      scale: 1,
      opacity: 1,
      zIndex: 10,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    inactive: {
      scale: 0.8,
      opacity: 0.6,
      zIndex: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={styles.carouselContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 className={styles.sectionTitle} variants={containerVariants}>
        <span>Currently Reading</span>
      </motion.h1>
      <div className={styles.carousel}>
        <div className={styles.carouselTrack}>
          {books.map((book, index) => (
            <motion.div
              className={styles.carouselItem}
              variants={bookVariants}
              initial='inactive'
              animate={selectedIndex === index ? 'active' : 'inactive'}
              whileHover='hover'
              onMouseEnter={() => handleBookHover(index, book)}
              onMouseLeave={handleBookLeave}
              onTap={() => {
                if (hoveredBook?.id === book.id) {
                  handleBookLeave();
                } else {
                  handleBookHover(index, book);
                }
              }}
              onClick={() => handleBookClick(book)}
              data-active={selectedIndex === index}
            >
              <BookItem
                title={book.title}
                subtitle={book.subtitle}
                image={book.image}
                review={book.review}
                isHovered={hoveredBook?.id === book.id}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BookCarousel;
