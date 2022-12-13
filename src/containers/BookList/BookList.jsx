import Book from "../../components/Book/Book";
import styles from "./BookList.module.scss";

const BookList = ({
  searchTerm,
  prevSearchTerm,
  searchResults,
  setSpecificBook,
  setShowModal,
}) => {
  // To displayed the last searched term and not to dynamically change text.
  return (
    <div className={styles.BookList}>
      {!searchResults ? (
        <p>{`Sorry, we could not find "${prevSearchTerm}" in our library.`}</p>
      ) : (
        <>
          {searchResults.map((book) => (
            <div
              key={book.id}
              onClick={() => {
                setSpecificBook(book);
                setShowModal(true);
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
        </>
      )}
    </div>
  );
};

export default BookList;
