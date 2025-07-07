import { useState } from 'react';
import Header from '../components/Header';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [modal, setModal] = useState({ isOpen: false, imgSrc: '', imgTitle: '' });

  const displayModal = (imgSrc: string, imgTitle: string) => {
    setModal({ isOpen: true, imgSrc, imgTitle });
  };

  const closeModal = () => {
    setModal({ isOpen: false, imgSrc: '', imgTitle: '' });
  };

  return (
    <>
      <Header />
      <main className={styles.galleryContainer}>
        <div className={styles.imgWidget}>
          <img
            id="Eyes Wide Open"
            src="/img/allEyes.JPG"
            alt="watercolor eyes and flowers"
            onClick={() => displayModal("/img/allEyes.JPG", "Eyes Wide Open")}
          />
          <div className={styles.paintingTitle}>
            <h3 className="for-left">Eyes Wide Open</h3>
          </div>
        </div>

        <div className={styles.imgWidget}>
          <img
            id="Flowes Make Us Girl"
            src="/img/girlWithFlowers.JPG"
            alt="watercolor girl and flowers"
            onClick={() => displayModal("/img/girlWithFlowers.JPG", "Flowes Make Us Girl")}
          />
          <div className={styles.paintingTitle}>
            <h3 className="for-img-right">Flowers Make Us Girl</h3>
          </div>
        </div>

        <div className={styles.imgWidget}>
          <img
            id="Flowers Make Us Girl-2"
            src="/img/girlWithSunflower.JPG"
            alt="girl with sunflower"
            onClick={() => displayModal("/img/girlWithSunflower.JPG", "Flowers Make Us Girl-2")}
          />
          <div className={styles.paintingTitle}>
            <h3 className="for-img-left">Flowers Make Us Girl-2</h3>
          </div>
        </div>

        <div className={styles.imgWidget}>
          <img
            id="The Hometown"
            src="/img/BluePlanet.JPG"
            alt="watercolor earth"
            onClick={() => displayModal("/img/BluePlanet.JPG", "The Hometown")}
          />
          <div className={styles.paintingTitle}>
            <h3 className="for-img-right">The Hometown</h3>
          </div>
        </div>

        <div className={styles.imgWidget}>
          <img
            id="The Night"
            src="/img/MoonZan.JPG"
            alt="watercolor moon with flowers"
            onClick={() => displayModal("/img/MoonZan.JPG", "The Night")}
          />
          <div className={styles.paintingTitle}>
            <h3 className="for-img-left">The Night</h3>
          </div>
        </div>

        <div className={styles.imgWidget}>
          <img
            id="In a Dream"
            src="/img/in a dream.JPG"
            alt="giant purple flowers"
            onClick={() => displayModal("/img/in a dream.JPG", "In a Dream")}
          />
          <div className={styles.paintingTitle}>
            <h3 className="for-img-right">In A Dream</h3>
          </div>
        </div>

        {modal.isOpen && (
          <div id="modal" className={styles.modal} style={{ display: 'block' }}>
            <span id="close" role="button" className={styles.close} onClick={closeModal} style={{ display: 'block' }}>
              &times;
            </span>
            <img className={styles.modalImg} id="modalImg" src={modal.imgSrc} />
            <div id="modal-img-title" className={styles.modalPaintingTitle}>
              {modal.imgTitle}
            </div>
          </div>
        )}
      </main>
      <footer>
        <h5>Created By Yuling 2020</h5>
      </footer>
    </>
  );
};

export default Gallery;
