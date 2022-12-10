import Book from "../../components/Book/Book";

const BookList = ({ searchResults }) => {
  return (
    <div>
      {searchResults.map((book) => (
        <Book
          key={book.id}
          bookImg={
            book.volumeInfo.imageLinks.smallThumbnail ??
            "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
          }
          bookTitle={book.volumeInfo.title}
          bookAuthor={
            book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "Unknown"
          }
          bookDesc={book.volumeInfo.description ?? "No description"}
        />
      ))}
    </div>
  );
};

export default BookList;
