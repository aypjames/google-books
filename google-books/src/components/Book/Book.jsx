import styles from "./Book.module.scss";

const Book = ({ bookImg, bookTitle, bookAuthor, bookDesc }) => {
  const truncateStr = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
  };
  return (
    <div className={styles.Book}>
      <img
        className={styles.Book_Img}
        src={bookImg}
        alt={`Image of the book cover for ${bookTitle}`}
      />
      <h3>{truncateStr(bookTitle, 30)}</h3>
      <p>by {truncateStr(bookAuthor, 30)}</p>
      <p>{truncateStr(bookDesc, 50)}</p>
    </div>
  );
};

export default Book;
