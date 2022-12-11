import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import BookList from "./containers/BookList/BookList";
import BookModal from "./components/BookModal/BookModal";
import styles from "./App.module.scss";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [loadModalData, setloadModalData] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [bookIndexForModal, setBookIndexForModal] = useState(0);

  console.log(bookIndexForModal);

  return (
    <div className={styles.App}>
      <Header />
      <Form
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isFetchingData={isFetchingData}
        setIsFetchingData={setIsFetchingData}
        setSearchResults={setSearchResults}
        setloadModalData={setloadModalData}
      />
      {isFetchingData ? (
        <p>{`Just a sec! Searching the library for "${searchTerm}"`}</p>
      ) : (
        <BookList
          searchResults={searchResults}
          setBookIndexForModal={setBookIndexForModal}
        />
      )}

      {loadModalData ? (
        <BookModal
          bookIndexForModal={bookIndexForModal}
          searchResults={searchResults}
        />
      ) : (
        <p>Awaiting Search</p>
      )}
    </div>
  );
};

export default App;
