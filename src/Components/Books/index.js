import React, { useContext, Fragment } from "react";
import { Context } from "../../context/Context";
import Book from "../BookItem";
import {AiOutlineClose} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'


const Books = () => {
  const { books, clearSearch, searchedBooks, searchString } = useContext(Context);

  return (
    <div className="container">
      <h1
        
        className="search-text-heading"
      >
        {searchString === null ? (
          "All Books"
        ) : (
          <Fragment>
            {" "}
            Searching for '{searchString}'
            <span onClick={() => clearSearch()} class="close-btn">
              <AiOutlineClose/>
            </span>
            
          </Fragment>
        )}
      </h1>
      

      <div className="row">
        {searchedBooks.length === 0
          ? books.map(book => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })
          : searchedBooks.map(book => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })}
      </div>
    </div>
  );
};

export default Books;