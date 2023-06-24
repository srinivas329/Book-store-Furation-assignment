

import {AiTwotoneStar} from 'react-icons/ai'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'


const Book = ({ bookDetails }) => {
  const {
    id,
    title,
    coverImageSrc,
    rating,
    price,
    authorName,
    authorId
  } = bookDetails;

 

  return (
    <div className="card-container">
      <div className="">
        <img className="thumbnail" src={coverImageSrc} alt="" />
        <div className="details">
          <div className="content">
            <h5>
              <Link className="link-style" to={"/book/details/" + id}>
                <h1 className="book-title">{title.length > 28 ? title.slice(0,26) + "..." : title}</h1>
              </Link>
            </h5>
            <h6>
              <Link className="link-style"  to={"/author/" + authorId}>
                <p className="author-name">By: {authorName}</p>
              </Link>
            </h6>
            <p className="rating">
              <AiTwotoneStar size={20} color="greenyellow"/>{rating}
            </p>
            <h4 className="price">Price:₹{price}</h4>
          </div>
        </div>
      </div>
      <div className="">
        <Link className="link-style" to={"/book/details/" + id}>
          <button className="details-btns">
          Details
          </button>
          
        </Link>
       
      </div>
    </div>
  );
};

export default Book;