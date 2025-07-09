import BookItem from '../components/BookItem';
import Header from '../components/Header';
import WorkExperienceItem from '../components/WorkExperienceItem';
import { books, workExperiences } from '../const/aboutMeData';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <Header />
      <main className={styles.aboutMePage}>
        <div className={styles.aboutMeIntro}>
          <h1>
            I'm Yuling, a Frontend Engineer passionate about crafting
            responsive, user-friendly web and mobile interfaces.
          </h1>
          <h1>
            With expertise in React, TypeScript, and Preact, I build seamless
            experiences and advocate for clean, testable code. In my free time,
            I love reading, painting, and volunteering to support mental health
            through Lifeline.
          </h1>
        </div>

        <div>
          <h1 className={styles.aboutMeSectionTitle}>
            <span>Work Experience</span>
          </h1>
          {workExperiences.map((experience) => (
            <WorkExperienceItem
              key={experience.id}
              title={experience.title}
              description={experience.description}
              years={experience.years}
              colorClass={experience.colorClass}
            />
          ))}
        </div>

        <div>
          <h1 className={styles.aboutMeSectionTitle}>
            <span>Currently reading</span>
          </h1>
          <div className={styles.bookList}>
            {books.map((book) => (
              <BookItem
                key={book.id}
                title={book.title}
                subtitle={book.subtitle}
                image={book.image}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
