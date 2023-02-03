import { useContext } from "react";
import styles from "./Form.module.scss";
import { GlobalContext } from "../../App.jsx";
import { getArrayOfBooks } from "../../utilities/utilities";

const Form = () => {
  const {
    searchTerm,
    setSearchTerm,
    setPrevSearchTerm,
    isFetchingData,
    setIsFetchingData,
    setSearchResults,
  } = useContext(GlobalContext);

  const searchForBooks = async (query) => {
    const searchQuery = query.replaceAll(" ", "+");
    const response =
      await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40
`);
    const results = await response.json();
    return results;
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsFetchingData(true);
    setPrevSearchTerm(searchTerm);
    searchForBooks(searchTerm)
      .then((results) => getArrayOfBooks(results))
      .then((listOfBooks) => setSearchResults(listOfBooks))
      .catch((error) => console.log(error))
      .finally(() => setIsFetchingData(false));
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.Form}>
      <form>
        <input
          type="text"
          id="searchTerm"
          placeholder="Book Title"
          onChange={handleInputChange}
        />
        <button disabled={isFetchingData} onClick={handleSubmitClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
