import React from 'react';
import { Link } from 'react-router-dom';
import user from './media/user-icon.svg';
import './styling/headerstyling.css';

const Header = () => (
  <header className="header">
    <div>
      <h1>Bookstore</h1>
      <nav>
        <Link to="/" className="book-link">
          Books
        </Link>
        <Link
          to="/categories"
          className="categories-link"
        >
          Categories
        </Link>
      </nav>
    </div>
    <img src={user} alt="user-icon" width="4%" />
  </header>
);

export default Header;
