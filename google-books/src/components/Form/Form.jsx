import { useState } from "react";

const Form = ({
  searchTerm,
  setSearchTerm,
  isFetchingData,
  setIsFetchingData,
  setSearchResults,
  setloadModalData,
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
    setloadModalData(true);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsFetchingData(true);
    dataFetch();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
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
  );
};

export default Form;
