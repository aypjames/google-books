import styles from "./Book.module.scss";
import { truncateStr } from "../../utilities/utilities.js";

const Book = ({ bookImg, bookTitle, bookAuthor, bookDesc }) => {
  return (
    <div className={styles.Book}>
      <img
        className={styles.Book_Img}
        src={bookImg}
        alt={`Image of the book cover for ${bookTitle}`}
      />
      <h3>{truncateStr(bookTitle, 30)}</h3>
      <p className={styles.Book_Author}>by {truncateStr(bookAuthor, 30)}</p>
      <p>{truncateStr(bookDesc, 80)}</p>
    </div>
  );
};

export default Book;
