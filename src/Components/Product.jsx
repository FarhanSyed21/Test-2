import React from "react";
import "./Product.css";

const Product = ({ name, description, price, handleBuyClick }) => {
  return (
    <div className="product">
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>

      <button onClick={() => handleBuyClick(1, name, description, price)}>
        Buy 1
      </button>
      <button onClick={() => handleBuyClick(2, name, description, price)}>
        Buy 2
      </button>
      <button onClick={() => handleBuyClick(3, name, description, price)}>
        Buy 3
      </button>
    </div>
  );
};

export default Product;
