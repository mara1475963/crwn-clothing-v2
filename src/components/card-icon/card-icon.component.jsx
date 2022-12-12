import React, { useContext } from "react";

import { CartContext } from "../../contexts/cardContextprovider";

import { ShoppingIcon, CartContainer, ItemCount } from "./cart-icon.styles.jsx";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>
        {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
      </ItemCount>
    </CartContainer>
  );
};

export default CardIcon;
