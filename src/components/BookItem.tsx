import styles from './BookItem.module.css';

interface BookItemProps {
  title: string;
  subtitle: string;
  image: string;
}

const BookItem: React.FC<BookItemProps> = ({ title, subtitle, image }) => (
  <div className={styles.bookItem}>
    <img src={image} alt={`${title} cover`} />
    <h3>{title}</h3>
    <p>{subtitle}</p>
  </div>
);

export default BookItem;
