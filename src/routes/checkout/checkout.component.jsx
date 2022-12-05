import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cardContextprovider";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Descripton</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((product) => {
        return <CheckoutItem key={product.id} product={product} />;
      })}
      <span className="total">
        TOTAL:
        {cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)} $
      </span>
    </div>
  );
};

export default Checkout;
