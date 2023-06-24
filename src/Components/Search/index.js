import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import {BiSearchAlt2} from 'react-icons/bi'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'


const Search = () => {
  const [keywords, setKeywords] = useState("");
  const { getSearchedBooks, searchString } = useContext(Context);

  const handleChange = e => {
    setKeywords(e.target.value);
  };

  useEffect(() => {
    if (searchString === null) {
      setKeywords("");
    }
  }, [searchString]);

  const searchBooks = () => {
    getSearchedBooks(keywords);
  }

  return (
    <div className="search-bg">
      <input
      onChange={handleChange}
      style={{ width: "90%" }}
      className="input-element"
      type="search"
      placeholder="Search For the book using book title (e.g. The Prophet)"
      value={keywords}
    />
    <button type="button" title="search" className="search-btn" onClick={searchBooks}><BiSearchAlt2 size={30}/></button>
    </div>
    
  );
};

export default Search;
