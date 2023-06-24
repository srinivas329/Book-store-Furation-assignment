import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

// import { useNavigate } from "react-router-dom";

const BookCartCheckOut = () => {
  const { books, carts } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
  const stripeKey = "pk_test_51N85LTSCj0q5tvNeAOxKEEBFizYZKoSEIPk8xXxgNjiYXqvhkrOTFDkKLmq4a8so24jS0yWp4Ju1UJsWAq5XAsRm009AktTsmV";
  const shippingCost = 5;

  const onToken = (token) => {
    console.log(token);
    alert("Your Payment has been processed");
    // navigate("/");
  };

  const subTotal = (books, carts) => {
    let subtotal = 0;
    carts.forEach((cart) => {
      books.forEach((book) => {
        if (book.id === cart.id) {
          subtotal = subtotal + book.price * cart.quantity;
        }
      });
    });

    return subtotal.toFixed(2);
  };

  let subtotal = subTotal(books, carts);
  let tempTotal = (parseFloat(subtotal) + shippingCost).toFixed(2);

  useEffect(() => {
    setTotalPrice(tempTotal);
  }, [tempTotal]);

  return (
      <div className="check-out-table">
        <h1 className="heading text-center check-out-description">Total</h1>
        <table className="table1">
          <tbody>
            <tr>
              <td className="check-out-description">Subtotal</td>
              <td className="check-out-description">₹{subtotal}</td>
            </tr>
            <tr>
              <td className="check-out-description">Shipping Cost</td>
              <td className="check-out-description">₹0{shippingCost}</td>
            </tr>
            <tr className="text-primary h4">
              <td className="check-out-description">Total</td>
              <td className="check-out-description">₹{totalPrice}</td>
            </tr>
            <tr>
              <td>
                <Link className="link-style" to="/">
                  <button className="back-to-shop-btn">Back To Shopping</button>
                </Link>
              </td>
              <td>
                <StripeCheckout
                  name="Book Checkout"
                  description="Please fill in the details below"
                  amount={totalPrice * 100}
                  currency="INR"
                  stripeKey={stripeKey}
                  token={onToken}
                  billingAddress
                >
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-outline-info"
                      onClick={() => {
                        alert("Product is ready");
                      }}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </StripeCheckout>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default BookCartCheckOut;