import { formatData } from "../../utilities/utilities";
import styles from "./Book.module.scss";

const Book = ({ bookDetails }) => {
  const formattedData = formatData(bookDetails);

  return (
    <div className={styles.Book}>
      <img
        className={styles.Book_Img}
        src={formattedData.smallThumbnail}
        alt={`Image of the book cover for ${formattedData.title}`}
      />
      <h3 className={styles.truncate}>{formattedData.title}</h3>
      <p className={`${styles.Book_Author} ${styles.truncate}`}>
        by {formattedData.authors}
      </p>
      <p className={styles.truncateMultiline}>{formattedData.description}</p>
    </div>
  );
};

export default Book;
