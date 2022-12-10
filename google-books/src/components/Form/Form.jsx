import { useState } from "react";

const Form = ({
  searchTerm,
  setSearchTerm,
  isFetchingData,
  setIsFetchingData,
  setSearchResults,
}) => {
  const dataFetch = async () => {
    const response =
      await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}
`);
    const results = await response.json();
    const resultsToArray = Object.values(results);
    const arrayOfBooks = resultsToArray[2];
    console.log(arrayOfBooks);
    setSearchResults(arrayOfBooks);
    setIsFetchingData(false);
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
