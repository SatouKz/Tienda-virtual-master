import React from "react";
import { useParams } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";
import AddToCart from "../components/AddToCart";

import "./ShowProduct.css";
const ShowProduct = ({ productos }) => {
  let { id } = useParams();
  return (
    <div className="show-product-container">
      <ButtonBack />
      {productos
        ?.filter((card) => card.id == id)
        .map((productcard, index) => (
          <div key={index} className="show-product">
            <div className="product-img">
              <img src={productcard.imagen} alt="Imagen" />
            </div>
            <div className="product-description">
              <h1>{productcard.tittle}</h1>
              <p>⭐⭐⭐⭐⭐</p>
              <p>Precio: $ {productcard.price}</p>
              <p>Description: {productcard.description}</p>
            </div>
            <AddToCart productos={productcard} />
          </div>
        ))}
    </div>
  );
};

export default ShowProduct;
