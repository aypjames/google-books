import styles from "./BookModal.module.scss";

const BookModal = ({ bookIndexForModal, searchResults }) => {
  const book = searchResults[bookIndexForModal];

  return (
    <div className={styles.BookModal}>
      <div className={styles.BookModal_Content}>
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.smallThumbnail
              : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
          }
          alt={`Image of the book cover for ${book.volumeInfo.title}`}
        />
        <h3>{book.volumeInfo.title}</h3>
        <p>
          by{" "}
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : "Unknown"}
        </p>
        <p>{book.volumeInfo.description ?? "No description"}</p>
      </div>
    </div>
  );
};

export default BookModal;
