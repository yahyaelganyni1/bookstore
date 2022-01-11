import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';
import './styling/bookformstyling.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const addNewBook = () => {
    const id = uuidv4();
    if (title.length && category.length) {
      dispatch(postBook(id, title, category));
      setTitle('');
      setCategory('');
    } else if (!title.length && !category.length) {
      setError('Please add book title, and category');
    } else if (!title.length) {
      setError('Please add book title');
    } else {
      setError('Please add book category');
    }
  };
  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="book-form">
      <h5>ADD NEW BOOK</h5>
      <input
        placeholder="Book Title"
        type="text"
        onChange={handelTitleChange}
        value={title}
        required
      />
      <select
        id="cars"
        name="cars"
        onChange={handelCategoryChange}
        value={category}
      >
        <option hidden>Category</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Romance</option>
      </select>
      <button
        type="button"
        value="ADD BOOK"
        onClick={addNewBook}
      >
        ADD BOOK
      </button>
      <h6>{error}</h6>
    </div>
  );
};

export default BookForm;
