import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

const Navbar = () => {
  const { carts } = useContext(Context);
  return (
    <div className="nav-bg">
        <Link
          className="links-style"
          to="/"
        >
          <div className="logo-style">
          <h3 className="logo">Book Store</h3>
          </div>
         
        </Link>
        <div className="nav-links-alignment">
        <Link className="links-style" to="/book-cart">
          <AiOutlineShoppingCart size={35} color="greenyellow"/> <p className="cart-count">
          <span style={{ color: "black" }}>
            {carts.length !== 0 ? carts.length : 0}
          </span>
          </p>
        </Link>
        <nav className="my-0 my-md-0.0 mr-md-4 ">
          <Link className="links-style" to="/about">
            <p className="about-text">
            About
            </p>
            
          </Link>
        </nav>
        </div>
        
    </div>
  );
};

export default Navbar;