import styles from './WorkExperienceItem.module.css';

interface WorkExperienceItemProps {
  title: string;
  description: string;
  years: string;
  colorClass: string;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  title,
  description,
  years,
  colorClass,
}) => (
  <div className={`${styles.aboutMeWidgetFlex} ${styles[colorClass]}`}>
    <div className={styles.workExperienceWrapper}>
      <div className={styles.aboutMeWorkContent}>
        <h3>{title}</h3>
        <h3 className={styles.workingYearsSmall}>{years}</h3>
        <p>{description}</p>
      </div>
      <h3 className={styles.workingYears}>{years}</h3>
    </div>
  </div>
);

export default WorkExperienceItem;
