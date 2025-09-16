import { motion } from 'framer-motion';
import {
  containerVariants,
  cardVariants,
  buttonVariants,
} from '../components/Contact/contactAnimation';
import styles from './Contact.module.css';
import contactData from '../const/contactMeData';
import SocialLink from '../components/Contact/SocialLink/SocialLink';

const Contact = () => {
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
            <img
              src={contactData.hireMe.image}
              alt={contactData.hireMe.imageAlt}
              loading='lazy'
            />
            {contactData.hireMe.description.map((line, index) => (
              <p className={styles.hireMeDescription} key={index}>
                {line}
              </p>
            ))}
            <button id='resume-btn' className={styles.resumeBtn}>
              <motion.a
                href={contactData.hireMe.button.href}
                target='_blank'
                variants={buttonVariants}
                whileHover='hover'
                whileTap='tap'
                transition={{ duration: 0.3 }}
                style={{ display: 'block', width: '100%', height: '100%' }}
              >
                {contactData.hireMe.button.text}
              </motion.a>
            </button>
          </motion.div>

          <motion.div className={styles.makeFriends} variants={cardVariants}>
            <h1 className={styles.makeFriendsTitle}>
              <span>{contactData.connect.title}</span>
            </h1>
            <p>{contactData.connect.description}</p>
            <div className={styles.makeFriendsImg}>
              {contactData.connect.socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.href}
                  icon={link.icon}
                  alt={link.alt}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
        <footer>
          <div className={styles.footerIconInfo}>
            <p>
              {contactData.footer.credit.text}{' '}
              <a
                href={contactData.footer.credit.authorUrl}
                title={contactData.footer.credit.author}
                target='_blank'
                rel='noopener noreferrer'
              >
                {contactData.footer.credit.author}
              </a>{' '}
              from{' '}
              <a
                href={contactData.footer.credit.sourceUrl}
                title={contactData.footer.credit.source}
                target='_blank'
                rel='noopener noreferrer'
              >
                {contactData.footer.credit.source}
              </a>
            </p>
          </div>
        </footer>
      </motion.main>
    </>
  );
};

export default Contact;
