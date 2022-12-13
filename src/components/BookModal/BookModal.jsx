import styles from "./BookModal.module.scss";

const BookModal = ({ specificBook, setShowModal }) => {
  const book = specificBook;
  console.log(book.infoLink);

  return (
    <div className={styles.BookModal}>
      <div className={styles.BookModal_Holder}>
        <div className={styles.Content}>
          <div className={styles.Content_Img}>
            <img
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
              }
              alt={`Image of the book cover for ${book.volumeInfo.title}`}
            />
          </div>
          <div className={styles.Content_Desc}>
            <h2>{book.volumeInfo.title}</h2>
            <p className={styles.italics}>
              by{" "}
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Unknown"}
            </p>
            <p>{book.volumeInfo.description ?? "No description"}</p>
            <p>
              <span className={styles.bold}>Publisher:</span>{" "}
              {book.volumeInfo.publisher ?? "Unknown"}
            </p>
            <p>
              <span className={styles.bold}>Published Date:</span>{" "}
              {book.volumeInfo.publishedDate ?? "Unknown"}
            </p>
          </div>
        </div>
        {book.volumeInfo.infoLink && (
          <button
            className={styles.BookModal_Button_MoreInfo}
            onClick={() => {
              window.open(book.volumeInfo.infoLink, "_blank");
            }}
          >
            More Info
          </button>
        )}

        <button
          className={styles.BookModal_Button_Cancel}
          onClick={() => {
            setShowModal(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookModal;
