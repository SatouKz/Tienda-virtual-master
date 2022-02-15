import React from 'react'
import './ProductsPage.css';

import Card from '../components/Card';
import productos from '../assets/images/productos'

const ProductsPage = () => {
  return (
    <div className='container'>
      <h1>Últimos Productos</h1>
      <div className="products-list">
        {
          productos.map((product, index)=>(
            <Card key={index} producto={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProductsPage;