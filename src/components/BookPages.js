import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';
import BookForm from './BookForm';
const BookPages = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <SingleBook
            title={book.title}
            category={book.category}
            author="yahya"
            id={book.id}
            key={book.id}
          />
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default BookPages;
