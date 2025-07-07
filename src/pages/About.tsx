import Header from '../components/Header';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <Header />
      <main className={styles.aboutMePage}>
        <div className={styles.aboutMeIntro}>
          <h1>I'm Yuling, an English teacher, a kids' programming teacher, a Lifeline volunteer and a watercolorist.</h1>
          <h1>I care about animals and the environment.</h1>
        </div>
        <div className="about-me-working-history">
          <h1 className={styles.aboutMeSectionTitle}><span>Work Experience</span></h1>
          <div className={`${styles.aboutMeWidgetFlex} ${styles.aboutMeWidgetColor2}`}>
            <div className={styles.aboutMeWorkContent}>
              <h3>Private English Tutor - present</h3>
              <p>My students' age are from 7 to 70 years old. Most of them have been learning with me for more than 2 years.</p>
            </div>
            <h3 className={styles.workingYears}>4 years+</h3>
          </div>

          <div className={`${styles.aboutMeWidgetFlex} ${styles.aboutMeWidgetColor1}`}>
            <div className={styles.aboutMeWorkContent}>
              <h3>Lifeline volunteer <br />- present</h3>
              <p>At Lifeline, we need to be tained for 2 years to become a qualified volunteer. We respond to people in need of support on the phone to offer hope and accompany.</p>
              <p>Every year, we need to take courses and meet the minimum 10 hours' requirement in order to keep up with psychological knowledge.</p>
            </div>
            <h3 className={styles.workingYears}>3 years+</h3>
          </div>

          <div className={`${styles.aboutMeWidgetFlex} ${styles.aboutMeWidgetColor2}`}>
            <div className={styles.aboutMeWorkContent}>
              <h3>First Code Academy<br />- present</h3>
              <p>Teaching 4 to 12-year-old children how to code with Cubetto, Scratch, Micro:bit, Minecraft and Roblox.</p>
            </div>
            <h3 className={styles.workingYears}>2 years</h3>
          </div>

          <div className={`${styles.aboutMeWidgetFlex} ${styles.aboutMeWidgetColor1}`}>
            <div className={styles.aboutMeWorkContent}>
              <h3>Working Holiday in Australia</h3>
              <p>Apart from working at a blueberry farm for 6 months, I have mainly worked for an Aussie's private construction company.</p>
              <p>I have done painting, welding and helping to build the base of houses.</p>
            </div>
            <h3 className={styles.workingYears}>2 years</h3>
          </div>

          <div className={`${styles.aboutMeWidgetFlex} ${styles.aboutMeWidgetColor2}`}>
            <div className={styles.aboutMeWorkContent}>
              <h3>Shinkong Mitsukoshi Department Store</h3>
              <p>80% of my job here was to deal with customer complains. The rest were to teach sales person the service manner and maintain the service quality. Finally, provide translation for foreign customers and do office work. </p>
            </div>
            <h3 className={styles.workingYears}>9 months</h3>
          </div>
        </div>

        <div className="about-me-reading-section">
          <h1 className={styles.aboutMeSectionTitle}><span>Currently reading</span></h1>
          <div className={styles.bookList}>
            <div className={styles.bookItem}>
              <img src="https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/049/09/0010490999.jpg&v=4d021e42&w=348&h=348" alt="book's image" />
              <h3>Echo Legacy</h3>
              <p>Stories of the Sahara</p>
            </div>
            <div className={styles.bookItem}>
              <img src="https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/086/79/0010867931_bc_01.jpg&v=5f3a6a49&w=348&h=348" alt="book's image" />
              <h3>Angela Duckworth</h3>
              <p>Grit, the power of passion and perseverance</p>
            </div>
            <div className={styles.bookItem}>
              <img src="https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/047/70/0010477040.jpg&v=533d706b&w=348&h=348" alt="book's image" />
              <h3>John berger</h3>
              <p>Ways of seeing</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
