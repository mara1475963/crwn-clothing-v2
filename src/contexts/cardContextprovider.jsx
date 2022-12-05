import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
});

const addCartItems = (cartItems, productToAdd) => {
  for (let el of cartItems) {
    if (el.id === productToAdd.id) {
      el.quantity++;
      return [...cartItems];
    }
  }

  productToAdd["quantity"] = 1;
  cartItems.push(productToAdd);

  return [...cartItems];
};

const deleteCartItem = (cartItems, productToDelete) => {
  return [...cartItems.filter((p) => p.id !== productToDelete.id)];
};

const removeCartItems = (cartItems, productToRemove) => {
  const product = cartItems.find((p) => p.id === productToRemove.id);
  if (product.quantity > 1) {
    product.quantity--;
    return [...cartItems];
  } else {
    return deleteCartItem(cartItems, productToRemove);
  }
};

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItems(cartItems, productToRemove));
  };
  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
