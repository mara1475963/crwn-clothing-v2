import React from 'react'

const CartItem = ({product}) => {
  return (
      <>
      <h6>{product.name}</h6>
      <span>{product.quantity}</span>
    </>
    )
}

export default CartItem