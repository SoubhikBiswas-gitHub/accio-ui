
import React from 'react'
import Product from './Product'


function ProductsList() {
  return (
    <div className='productList has-scrollbar'>
      <h3>Products</h3>
      <div className='productContainer'>
    <Product />
      </div>
     
    </div>
  )
}

export default ProductsList
