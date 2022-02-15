import React from 'react'

const AddToCart = ({productos}) => {
  return (
    <div className='add-to-cart'>
      <div className="info-the-cart">
        <p>Precio: $ {productos.price}</p>
        <p>Stock: Disponible</p>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <button>AGREGAR AL CARRITO</button>
      </div>
    </div>
  )
}

export default AddToCart