import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.main
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.contactContainer}
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div className={styles.hireMeWidget} variants={cardVariants}>
            <h1 className={styles.hireMeTitle}>
              <span>Work With Me</span>
            </h1>
            <img src='/img/myselfFilter.JPG' alt='Profile' />
            <p>
              Think I’d be a great fit for your team or project? <br />
              I’m open to exciting opportunities!
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
                Let’s Talk
              </motion.a>
            </button>
          </motion.div>

          <motion.div className={styles.makeFriends} variants={cardVariants}>
            <h1 className={styles.makeFriendsTitle}>
              <span>Let's Connect</span>
            </h1>
            <p>Want to chat or collaborate? Say hi on social!</p>
            <div className={styles.makeFriendsImg}>
              <motion.a
                href='https://www.instagram.com/anotherhuman124/?hl=zh-tw'
                target='_blank'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src='/img/instagram.png' alt='Instagram icon' />
              </motion.a>
              <motion.a
                href='https://www.linkedin.com/in/phoebe-lin-7b5108106/'
                target='_blank'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src='/img/linkedin.png' alt='LinkedIn icon' />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
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
      </motion.main>
    </>
  );
};

export default Contact;
