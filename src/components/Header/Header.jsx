import styles from "./Header.module.scss";
import Form from "../Form/Form";

const Header = ({
  searchTerm,
  setSearchTerm,
  setPrevSearchTerm,
  isFetchingData,
  setIsFetchingData,
  setSearchResults,
  setShowModal,
}) => {
  return (
    <header className={styles.Header}>
      <h1>Google Books</h1>
      <p>
        Search through the Google Books database and find your next favourite
        read!
      </p>
      <Form
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setPrevSearchTerm={setPrevSearchTerm}
        isFetchingData={isFetchingData}
        setIsFetchingData={setIsFetchingData}
        setSearchResults={setSearchResults}
        setShowModal={setShowModal}
      />
    </header>
  );
};

export default Header;
