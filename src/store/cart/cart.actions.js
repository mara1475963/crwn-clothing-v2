import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/firebase/reducer/reducer.utils";

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

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItems(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItems(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const deleteItemFromCart = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (open) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, open);
};
