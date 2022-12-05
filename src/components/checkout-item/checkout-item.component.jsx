import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cardContextprovider";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <span className="arrow" onClick={() => removeItemFromCart(product)}>
          &#10094;
        </span>
        {quantity}
        <span className="arrow" onClick={() => addItemToCart(product)}>
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>

      <div
        className="remove-button"
        onClick={() => deleteItemFromCart(product)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
