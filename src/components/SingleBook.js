import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { deleteBook } from '../redux/configureStore';

const SingleBook = ({ title, category, author, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{category}</span>
      <h2>{title}</h2>
      <p>{author}</p>
      <ul>
        <li>Comments</li>
        <button type="button" onClick={() => dispatch(deleteBook(id))}>
          Remove
        </button>
        <li>Edit</li>
      </ul>
    </div>
  );
};

SingleBook.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default SingleBook;
