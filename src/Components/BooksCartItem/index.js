import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'


const BookCartItem = ({ cart }) => {
  const { books, updateCart, removeCart } = useContext(Context);
  const { id, quantity } = cart;

  const [newQuantity, setNewQuantity] = useState(quantity);

  const book = books.filter(book => book.id === id);
  const { title, coverImageSrc, price, authorName, authorId } = book[0];

  const handleCartRemove = () => {
    removeCart(id);
  };

  return (
      <li className="row cart-card">
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 inline-block">
          <div className="product-cover w-50 m-auto">
            <img className="img-fluid1" src={coverImageSrc} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-5">
          <h4 className="title">
            {title}
          </h4>
          <h6>
            By <Link to={"/author/" + authorId}>{authorName}</Link>
          </h6>
          <h5 className="price">Price: ₹{price}</h5>
          <h5 className="price1">Total Price: ₹{(price * newQuantity).toFixed(2)}</h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-2 mt-5">
          <input
            onChange={e => {
              if (e.target.value > 0) {
                setNewQuantity(e.target.value);
                updateCart(id, e.target.value);
              } else {
                alert("Please enter a value greater than or equal to 1");
                setNewQuantity(1);
                updateCart(id, 1);
              }
            }}
            className="input-group w-25 text-center m-auto border border-info rounded-lg"
            type="text"
            value={newQuantity}
          />
        </div>
          <button onClick={handleCartRemove} className="remove-btn">
            Remove
          </button>
      </li>
  );
};

export default BookCartItem;