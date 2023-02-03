export const formatData = (data) => {
  return {
    title: data.volumeInfo.title ? data.volumeInfo.title : "Untitled",

    smallThumbnail: data.volumeInfo.imageLinks
      ? data.volumeInfo.imageLinks.smallThumbnail
      : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",

    authors: data.volumeInfo.authors
      ? data.volumeInfo.authors.join(", ")
      : "Unknown",

    description: data.volumeInfo.description
      ? data.volumeInfo.description
      : "No description",

    publisher: data.volumeInfo.publisher
      ? data.volumeInfo.publisher
      : "Unknown",

    publishedDate: data.volumeInfo.publishedDate
      ? data.volumeInfo.publishedDate
      : "Unknown",

    moreInfoLink: data.volumeInfo.infoLink
      ? data.volumeInfo.infoLink
      : "No Link",
  };
};

export const getArrayOfBooks = (respData) => {
  const resultsToArray = Object.values(respData);
  return resultsToArray[2];
};
