import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cardContextprovider";
import "./checkout-item.styles.scss";
import {
  removeItemFromCart,
  addItemToCart,
  deleteItemFromCart,
} from "../../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  // const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
  //   useContext(CartContext);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <span
          className="arrow"
          onClick={() => dispatch(removeItemFromCart(cartItems, product))}
        >
          &#10094;
        </span>
        {quantity}
        <span
          className="arrow"
          onClick={() => dispatch(addItemToCart(cartItems, product))}
        >
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>

      <div
        className="remove-button"
        onClick={() => dispatch(deleteItemFromCart(cartItems, product))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
