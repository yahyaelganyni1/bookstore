import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleBook from './SingleBook';
import BookForm from './BookForm';
import { getBooks } from '../redux/books/books';

const BookPages = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {books && books.length > 0 ? (
          books.map((book) => (
            <SingleBook
              title={book.title}
              category={book.category}
              author="yahya"
              id={book.id}
              key={book.id}
            />
          ))
        ) : (
          <h3>Add New Book!</h3>
        )}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookPages;
