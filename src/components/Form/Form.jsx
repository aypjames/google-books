import { useState } from "react";
import styles from "./Form.module.scss";

const Form = ({
  searchTerm,
  setSearchTerm,
  setPrevSearchTerm,
  isFetchingData,
  setIsFetchingData,
  setSearchResults,
}) => {
  const dataFetch = async () => {
    const searchQuery = searchTerm.replaceAll(" ", "+");
    const response =
      await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40
`);
    const results = await response.json();
    const resultsToArray = Object.values(results);
    const arrayOfBooks = resultsToArray[2];
    console.log("query results", arrayOfBooks);
    setSearchResults(arrayOfBooks);
    setIsFetchingData(false);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setPrevSearchTerm(searchTerm);
    setIsFetchingData(true);
    dataFetch();
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
