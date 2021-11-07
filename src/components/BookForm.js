import React from 'react';

const BookForm = () => {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <input placeholder="Book Title" />
      <select>
        <option value="" selected disabled hidden>
          Category
        </option>

        <option>action</option>
        <option>drama</option>
        <option>comedy</option>
        <option>Adventure</option>
        <option>Fantasy</option>
        <option>Horror</option>
      </select>
      <button type="button"> Add Book </button>
    </div>
  );
};

export default BookForm;
