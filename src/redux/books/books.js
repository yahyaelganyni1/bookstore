/* eslint-disable no-case-declarations */
import axios from 'axios';

const REMOVE_BOOK = 'REMOVE_BOOK';
const ADD_BOOK = 'ADD_BOOK';
const FETCH_BOOKS = 'FETCH_BOOKS';
const initialState = [];

const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export const getBooks = () => async (dispatch) => {
  axios
    .get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zQULsHhZKS3dGsxoewbW/books',
    )
    .then((res) => {
      const books = res.data;
      const formatedData = Object.keys(books).map((key) => {
        const bookData = books[key][0];
        return { ...bookData, id: key };
      });
      dispatch(fetchBooks(formatedData));
    })
    .catch((err) => console.log(err));
};

export const postBook = (id, title, category) => async (dispatch) => {
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zQULsHhZKS3dGsxoewbW/books',
    {
      method: 'POST',
      body: JSON.stringify({ item_id: id, title, category }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((res) => {
      res.text();
      dispatch(addBook({ id, title, category }));
    })
    .catch((err) => err);
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zQULsHhZKS3dGsxoewbW/books/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((res) => res.text())
    .then(() => dispatch(removeBook(id)))
    .catch((err) => err);
};

export default reducer;
