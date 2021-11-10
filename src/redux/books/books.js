/* eslint-disable no-case-declarations */
const REMOVE_BOOK = 'REMOVE_BOOK';
const ADD_BOOK = 'ADD_BOOK';
const FETCH_BOOKS = 'FETCH_BOOKS';
const initialState = [];

export const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const addBook = (payload) => ({
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

export default reducer;
