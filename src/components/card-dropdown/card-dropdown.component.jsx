import React from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/button.component'

import { useContext } from 'react'

import { CartContext } from '../../contexts/cardContextprovider' 
import CartItem from '../cart-item/cart-item.component'

const CardDropdown = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' />
        {cartItems.map(item=><CartItem key={item.id} product={item}/>)}

        <Button>checkout</Button>
        </div>
  )
}

export default CardDropdown