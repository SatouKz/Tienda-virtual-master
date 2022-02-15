import React from "react";
import {Link} from "react-router-dom";
import "./ToBuy.css";
const ToBuy = ({productos}) => {
  return (
    <div className="all-item">
      <h1>Carrito de compras</h1>
      <div>
        <div className="item-1">
          <img src={productos.imagen} alt="imagen" />
        </div>
        <div className="item-2">
          <Link key={productos.id} to={`/products/${productos.id}`}>
            {productos.tittle}
          </Link>
        </div>
        <div className="item-3">
            <strong>{productos.price}</strong>
        </div>
        <div className="item-4">
            <select>
                <option value="">1</option>
            </select>
        </div>
        <div className="item-5">
            🗑
        </div>
      </div>
    </div>
  );
};
export default ToBuy;
