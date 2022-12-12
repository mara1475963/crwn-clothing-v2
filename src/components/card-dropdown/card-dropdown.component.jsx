import React from "react";
import "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../../contexts/cardContextprovider";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropDownContainer,
  CartItems,
  EmptyMSG,
} from "./cart-dropdown.styles.jsx";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <EmptyMSG>Empty Cart</EmptyMSG>
        )}
      </CartItems>

      <Button onClick={() => navigate("/checkout")}>checkout</Button>
    </CartDropDownContainer>
  );
};

export default CardDropdown;
