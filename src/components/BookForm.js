import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addNewBook = () => {
    const newBook = {
      title,
      category,
      id: uuidv4(),
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };
  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div>
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
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Romance</option>
      </select>
      <button type="button" value="ADD BOOK" onClick={addNewBook}>
        ADD NEW BOOK
      </button>
    </div>
  );
};

export default BookForm;
