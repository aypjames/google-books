import { useContext } from "react";
import { GlobalContext } from "../../App";
import Book from "../../components/Book/Book";
import { formatData } from "../../utilities/utilities";
import styles from "./BookList.module.scss";

const BookList = () => {
  const { prevSearchTerm, searchResults, setSpecificBook, setShowModal } =
    useContext(GlobalContext);

  return (
    <div className={styles.BookList}>
      {!searchResults ? (
        <p>{`Sorry, we could not find "${prevSearchTerm}" in the library.`}</p>
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
              <Book bookDetails={book} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BookList;
