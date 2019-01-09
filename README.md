# LitLove

This is a solo project intended to cement React Redux principles and uses Redux Thunks for api calls. The audience and one api was assigned (Millenials and TasteDive, respectively). I decided to use the GoogleBooks api to account for possible missing words and misspellings from the user. It takes in the user's 'loved book' and returns recommendations based on the book's title.

## Using LitLove

Clone down this repo:
`git clone https://github.com/ashtonkbailey/LitLove.git`
Rename 'src/containers/search/' as 'src/containers/Search/'

In the project directory, run:
### `npm install`

In order to run locally you will also need to apply for a GoogleBooksAPI (Public API access) key [here](https://developers.google.com/books/docs/v1/using#APIKey) and a TasteDiveAPI key [here](https://tastedive.com/account/signin?next=%2Faccount%2Fapi_access). These keys should live in files called googleAPI.js (as `const googleKey`) and tasteDiveAPI.js (as `const tDKey`) in the src/utils directory.

Then in the project directory, run:
### `npm start`

## Wireframes

![Landing Page](https://github.com/ashtonkbailey/LitLove/blob/master/src/assets/landing-page.png)

![Loved Book Search](https://github.com/ashtonkbailey/LitLove/blob/master/src/assets/loved-book-search.png)

![New Search](https://github.com/ashtonkbailey/LitLove/blob/master/src/assets/new-search.png)

![Recommended Books](https://github.com/ashtonkbailey/LitLove/blob/master/src/assets/recommended-books.png)

## Live

![Landing Page](https://github.com/ashtonkbailey/LitLove/blob/master/src/assets/live-landing-page.png)

![Loved Book Search](https://github.com/ashtonkbailey/LitLove/blob/master/src/assets/live-loved-book.png)

![New Search](https://github.com/ashtonkbailey/LitLove/blob/master/src/assets/live-new-search.png)

![Recommended Books](https://github.com/ashtonkbailey/LitLove/blob/master/src/assets/live-recommended.png)

## Technologies

- React.js
- React Redux
- Redux Thunks
- React Router
- GoogleBooksAPI
- TasteDiveAPI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

