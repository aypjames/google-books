import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import BookList from "./containers/BookList/BookList";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  console.log(searchTerm);

  return (
    <div className="App">
      <Header />
      <Form
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isFetchingData={isFetchingData}
        setIsFetchingData={setIsFetchingData}
        setSearchResults={setSearchResults}
      />
      {isFetchingData ? (
        <p>{`Just a sec! Searching the library for "${searchTerm}"`}</p>
      ) : (
        <BookList searchResults={searchResults} />
      )}
      <BookList searchResults={searchResults} />
    </div>
  );
};

export default App;
