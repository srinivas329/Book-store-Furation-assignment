import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'


const BookDetails = () => {
  const { id } = useParams();
  const { addCart, books } = useContext(Context);

  const book = books.filter(book => book.id === id);
  const {
    title,
    coverImageSrc,
    rating,
    genre,
    price,
    description,
    authorName
  } = book[0];

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="details-container">
      <h1 className="heading-book-details">Book Details</h1>
      <div className="book-details w-75 my-4 mx-auto">
        <div className="row">
          <div className="book-img col-lg-5 col-12">
            <img className="cover-img" src={coverImageSrc} alt="" />
          </div>
          <div className="contents col-lg-7 col-12">
            
          <h1 className="author-name-details">{title}</h1>
            <h4 className="author-name-details">
              By: {authorName}
            </h4>
            <p className="text-capitalize genre">Genre: {genre.join(", ")}</p>
            <h5 className="author-name-details">
              Goodreads Rating: <i className="fa fa-star"></i>
              {rating}
            </h5>

            <p className="genre">{description}</p>

            <h4 className="price1">Price: ₹{price}</h4>

            <button
              style={{ fontSize: "1.3rem" }}
              className="add-to-cart-btn"
              onClick={handleAddCart}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;