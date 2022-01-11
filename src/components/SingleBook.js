import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';
import './styling/singlebookstyling.css';

const SingleBook = ({
  title,
  category,
  author,
  id,
  randomNum,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="single-book">
      <div className="category-name-section">
        <span className="category-span">{category}</span>
        <h2>{title}</h2>
        <p>{author}</p>
        <ul>
          <button type="button">Comments</button>
          <span className="divider-line-ul" />

          <button
            type="button"
            onClick={() => dispatch(deleteBook(id))}
          >
            Remove
          </button>
          <span className="divider-line-ul" />
          <button type="button">Edit</button>
        </ul>
      </div>
      <div className="progress-section">
        <svg width="100" height="100">
          <circle
            className="progress-circle"
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#0290ff"
            strokeWidth="6"
            strokeDasharray={randomNum}
            strokeDashoffset="0"
          />
        </svg>
        <div>
          <h3>
            {Math.floor((100 * randomNum) / 188)}
            %
          </h3>
          <span>completed</span>
        </div>
      </div>
      <div className="complete-progress-section">
        <span>CURRENT CHAPTER</span>
        <h5>Chapter 3: A Lesson learned</h5>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

SingleBook.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  randomNum: propTypes.number.isRequired,
};

export default SingleBook;
