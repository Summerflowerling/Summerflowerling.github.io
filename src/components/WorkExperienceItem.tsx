import styles from './WorkExperienceItem.module.css';

interface WorkExperienceItemProps {
  title: string;
  description: string;
  colorClass: string;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  title,
  description,
  colorClass,
}) => (
  <div className={`${styles.aboutMeWidgetFlex} ${styles[colorClass]}`}>
    <div className={styles.workExperienceWrapper}>
      <div className={styles.aboutMeWorkContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default WorkExperienceItem;
