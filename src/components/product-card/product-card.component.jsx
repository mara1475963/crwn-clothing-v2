import React from 'react'
import Button from '../button/button.component'
import './product-card.styles.scss'

import { useContext } from 'react'
import { CartContext} from '../../contexts/cardContextprovider'


const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product

    const {addItemToCart} = useContext(CartContext)

    const add = ()=>{
      addItemToCart(product)
    }

  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className='foooter'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={add}>Add to card</Button>
        </div>
  )
}

export default ProductCard