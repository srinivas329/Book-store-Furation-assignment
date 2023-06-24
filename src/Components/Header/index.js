import React from "react";
import Search from '../Search';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'


const Header = () => {
  return (
    <div className="container search-header px-3 py-3 mx-auto text-center mt-sm-2">
      <h1 className="greet-msg">Welcome to the Book Store!</h1>
      <Search />
    </div>
  );
};

export default Header;