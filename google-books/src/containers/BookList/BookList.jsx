import Book from "../../components/Book/Book";
import styles from "./BookList.module.scss";

const BookList = ({ searchResults, setBookIndexForModal }) => {
  return (
    <div className={styles.BookList}>
      {searchResults.map((book, index) => (
        <div
          key={book.id}
          onClick={() => {
            setBookIndexForModal(index);
          }}
        >
          <Book
            bookImg={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.smallThumbnail
                : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
            }
            bookTitle={book.volumeInfo.title}
            bookAuthor={
              book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Unknown"
            }
            bookDesc={book.volumeInfo.description ?? "No description"}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;
