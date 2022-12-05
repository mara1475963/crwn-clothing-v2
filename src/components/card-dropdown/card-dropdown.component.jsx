import React from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../../contexts/cardContextprovider";
import CartItem from "../cart-item/cart-item.component";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>

      <Button onClick={() => navigate("/checkout")}>checkout</Button>
    </div>
  );
};

export default CardDropdown;
