import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import styles from './Gallery.module.css';

const paintings = [
  {
    id: 'Eyes Wide Open',
    src: '/img/allEyes.JPG',
    alt: 'watercolor eyes and flowers',
    title: 'Eyes Wide Open',
  },
  {
    id: 'Flowers Make Us Girl',
    src: '/img/girlWithFlowers.JPG',
    alt: 'watercolor girl and flowers',
    title: 'Flowers Make Us Girl',
  },
  {
    id: 'Flowers Make Us Girl-2',
    src: '/img/girlWithSunflower.JPG',
    alt: 'girl with sunflower',
    title: 'Flowers Make Us Girl-2',
  },
  {
    id: 'The Hometown',
    src: '/img/BluePlanet.JPG',
    alt: 'watercolor earth',
    title: 'The Hometown',
  },
  {
    id: 'The Night',
    src: '/img/MoonZan.JPG',
    alt: 'watercolor moon with flowers',
    title: 'The Night',
  },
  {
    id: 'In a Dream',
    src: '/img/in a dream.JPG',
    alt: 'giant purple flowers',
    title: 'In a Dream',
  },
];

const Gallery = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    imgSrc: '',
    imgTitle: '',
  });

  const displayModal = (imgSrc: string, imgTitle: string) => {
    setModal({ isOpen: true, imgSrc, imgTitle });
  };

  const closeModal = () => {
    setModal({ isOpen: false, imgSrc: '', imgTitle: '' });
  };

  const galleryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      <main className={styles.galleryContainer}>
        {paintings.map(({ id, src, alt, title }, index) => (
          <motion.div
            key={id}
            className={styles.imgWidget}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={galleryVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => displayModal(src, title)}
          >
            <img src={src} alt={alt} className={styles.imgThumb} />
            <div className={styles.paintingTitle}>
              <h3 className={styles.title}>{title}</h3>
            </div>
          </motion.div>
        ))}
      </main>

      <AnimatePresence>
        {modal.isOpen && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.span
              className={styles.close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              role='button'
            >
              &times;
            </motion.span>
            <motion.img
              className={styles.modalImg}
              src={modal.imgSrc}
              alt={modal.imgTitle}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <motion.div className={styles.modalPaintingTitle}>
              {modal.imgTitle}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className={styles.footer}>
        <h5>Created By Yuling 2020</h5>
      </footer>
    </>
  );
};

export default Gallery;
