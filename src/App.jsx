import Header from "./components/Header/Header";
import BookList from "./containers/BookList/BookList";
import BookModal from "./components/BookModal/BookModal";
import styles from "./App.module.scss";
import { useState, createContext } from "react";

export const GlobalContext = createContext();

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [specificBook, setSpecificBook] = useState([]);

  const globalData = {
    searchTerm,
    setSearchTerm,
    prevSearchTerm,
    setPrevSearchTerm,
    isFetchingData,
    setIsFetchingData,
    showModal,
    setShowModal,
    searchResults,
    setSearchResults,
    specificBook,
    setSpecificBook,
  };

  return (
    <GlobalContext.Provider value={globalData}>
      <div className={styles.App}>
        <Header />
        {isFetchingData ? (
          <p>{`Just a second! Searching the library for "${searchTerm}"`}</p>
        ) : (
          <BookList />
        )}
        {showModal && <BookModal />}
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
