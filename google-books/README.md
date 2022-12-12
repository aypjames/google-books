# Google Books Search

A React web-application that allows you to search the Google Books API.
It produces a list of results, with the option to view more info by clicking into each specific book.

## ScreenShots

![Screenshot of Search Functionality](./src/assets/READMEImages/AppScreenShot1.png)
![Screenshot of Book Modal](./src/assets/READMEImages/AppScreenShot2.png)

## Features

- Enables you to search through the Google API and returns upto 40 results for the query.
- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information and a direct link to the google books result.
- The results grid are responsive on different screen sizes
- each block should has its own SCSS file and uses palette variables

## Useful Resources

- [Truncating Long Text]("https://javascript.info/task/truncate#:~:text=Create%20a%20function%20truncate(str,truncated%20(if%20needed)%20string.")
- [Google Books API no Auth link](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
- [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)

## Challenges

- Transferring of data across components - Next time, might consider using the useContext Hook
- Decluttering and organisation of Components and Containers
