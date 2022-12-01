import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { ProductContext } from '../../contexts/productContextprovider'
import ProductCard from '../product-card/product-card.component'
import './shop.styles.scss'
const  Shop = () => {
    const {products} = useContext(ProductContext);


  return (
    <div className='product-container'> {products.map((product) => {return (
<ProductCard key={product.id}product={product} />
    )
        
    })} </div>
  )
}

export default Shop

