import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonBack from "./ButtonBack";
import { Link } from "react-router-dom";
import "./ToBuy.css";
const ToBuy = ({ productos }) => {
  const [clean, setClean] = useState();
  let { id } = useParams();
  return (
    <div>
      <ButtonBack />
      {productos
        ?.filter((buy) => buy.id == id)
        .map((buycard, index) => (
          <div key={index} className="all-item">
            <h1>Carrito de compras</h1>
            <div>
              <div className="card-buy">
                <img src={buycard.imagen} alt="imagen" />
              </div>
              <div className="item-2">
                <Link key={buycard.id} to={`/products/${buycard.id}`}>
                  {buycard.tittle}
                </Link>
              </div>
              <div className="item-3">
                <strong>{buycard.price}</strong>
              </div>
              <div className="item-4">
                <select>
                  <option value="">1</option>
                </select>
              </div>
              <div className="item-5">
                <button>🗑</button>
              </div>
            </div>
            <div></div>
          </div>
        ))}
        {/* esto de momento lo dejo de lado */}
      <div className="all-item">
        <div>unidades</div>
        <div>precio</div>
        <div>Procesar la compra </div>
      </div>
    </div>
  );
};
export default ToBuy;
