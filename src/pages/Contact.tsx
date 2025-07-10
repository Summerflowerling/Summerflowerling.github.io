import { motion } from 'framer-motion';
import Header from '../components/Header';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.contactContainer}>
          <motion.div
            className={styles.hireMeWidget}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.hireMeTitle}>
              <span>Hire Me</span>
            </h1>
            <img src='/img/myselfFilter.JPG' />
            <p>
              Think I may be a good fit in your company? <br />I am open to
              different job opportunities.
            </p>
            <button id='resume-btn' className={styles.resumeBtn}>
              <a href='mailto: yulinglin@protonmail.com' target='_blank'>
                Email Me
              </a>
            </button>
          </motion.div>

          <motion.div
            className={styles.makeFriends}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className={styles.makeFriendsTitle}>
              <span>Let's connect</span>
            </h1>
            <p>Feel free to say hi</p>
            <div className={styles.makeFriendsImg}>
              <a
                href='https://www.instagram.com/anotherhuman124/?hl=zh-tw'
                target='_blank'
              >
                <img src='/img/instagram.png' alt='instagram icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/phoebe-lin-7b5108106/'
                target='_blank'
              >
                <img src='/img/linkedin.png' alt='linkedin icon' />
              </a>
            </div>
          </motion.div>
        </div>
        <footer>
          <div className={styles.footerIconInfo}>
            <p>
              Icons made by
              <a
                href='https://www.flaticon.com/authors/pixel-perfect'
                title='Pixel perfect'
                target='_blank'
              >
                Pixel perfect
              </a>
              from
              <a
                href='https://www.flaticon.com/'
                title='Flaticon'
                target='_blank'
              >
                www.flaticon.com
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Contact;
