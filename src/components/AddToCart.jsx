import React from "react";
import "./AddToCart.css";
import { Link } from "react-router-dom";
const AddToCart = ({ productos }) => {
  return (
    <div className="card">
      <div className="all-items">
        <div className="list-group-item">
          <div class="row">
            <div class="col">Precio: $</div>
            <div class="col">
              <strong>{productos.price}</strong>
            </div>
          </div>
          <div class="list-group-item">
            <div class="row">
              <div class="col">Stock:</div>
              <div class="col">Disponible</div>
            </div>
          </div>
          <div class="list-group-item">
            <div class="row">
              <div class="col">Unidades</div>
              <div class="col">
                <select class="form-select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          <div class="d-grid list-group-item">
            <button type="button">
              <Link
                key={productos.id}
                to={`/products/shooping-card/${productos.id}`}
              >
                Agregar al carrito de compra
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
