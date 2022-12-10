const Book = ({ bookImg, bookTitle, bookAuthor, bookDesc }) => {
  const truncateStr = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
  };
  return (
    <div>
      <img src={bookImg} alt={`Image of the book cover for ${bookTitle}`} />
      <h3>{bookTitle}</h3>
      <p>by {bookAuthor}</p>
      <p>{truncateStr(bookDesc, 250)}</p>
    </div>
  );
};

export default Book;
