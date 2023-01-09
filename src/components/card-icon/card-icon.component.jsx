import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartContext } from "../../contexts/cardContextprovider";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selectors";

import { ShoppingIcon, CartContainer, ItemCount } from "./cart-icon.styles.jsx";
import { setIsCartOpen } from "../../store/cart/cart.actions";

const CardIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  console.log(isCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartContainer>
  );
};

export default CardIcon;
