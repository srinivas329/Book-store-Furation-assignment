import React, { useContext } from "react";
import { Context } from "../../context/Context";
import BookCartItem from "../BooksCartItem";
import BookCartCheckOut from "../CheckOut";
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'


const Cart = () => {
  const { carts } = useContext(Context);

  if (carts.length === 0) {
    return (
      <h1 className="display-4 text-center my-5 cart-container cart-container2">
        Your cart is Empty. Add Something.
      </h1>
    );
  } else {
    return (
      <div className="cart-container">
        <h1 className="">Book Cart</h1>
        <ul className="cart-card1">
          {carts.map(cart => (
            <BookCartItem key={cart.id} cart={cart} />
          ))}
        </ul>
        <BookCartCheckOut />
      </div>
    );
  }
};

export default Cart;