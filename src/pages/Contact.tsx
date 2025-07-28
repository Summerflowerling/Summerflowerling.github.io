import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <>
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
              <motion.a
                href='mailto:yulinglin@protonmail.com'
                target='_blank'
                whileHover={{
                  scale: 1.05,
                  background:
                    'linear-gradient(90deg, var(--highlight-color), var(--contactMe-btn-hover-bg))',
                  color: 'var(--button-text-color)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'block', width: '100%', height: '100%' }}
              >
                Email Me
              </motion.a>
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
              <motion.a
                href='https://www.instagram.com/anotherhuman124/?hl=zh-tw'
                target='_blank'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src='/img/instagram.png' alt='instagram icon' />
              </motion.a>
              <motion.a
                href='https://www.linkedin.com/in/phoebe-lin-7b5108106/'
                target='_blank'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src='/img/linkedin.png' alt='linkedin icon' />
              </motion.a>
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
