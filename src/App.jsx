import Header from "./components/Header/Header";
import BookList from "./containers/BookList/BookList";
import BookModal from "./components/BookModal/BookModal";
import styles from "./App.module.scss";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [specificBook, setSpecificBook] = useState([]);

  const displayBookModal = () => {
    if (showModal) {
      return (
        <BookModal specificBook={specificBook} setShowModal={setShowModal} />
      );
    }
  };

  return (
    <div className={styles.App}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isFetchingData={isFetchingData}
        setIsFetchingData={setIsFetchingData}
        setSearchResults={setSearchResults}
        setShowModal={setShowModal}
        setPrevSearchTerm={setPrevSearchTerm}
      />
      <div>
        {isFetchingData ? (
          <p>{`Just a second! Searching the library for "${searchTerm}"`}</p>
        ) : (
          <BookList
            searchTerm={searchTerm}
            prevSearchTerm={prevSearchTerm}
            searchResults={searchResults}
            setSpecificBook={setSpecificBook}
            setShowModal={setShowModal}
          />
        )}
        {displayBookModal()}
      </div>
    </div>
  );
};

export default App;
