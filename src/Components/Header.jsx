import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import "./Header.css";

const Header = () => {
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [productList, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const nameHandler = (e) => {
    setItemName(e.target.value);
  };
  const descHandler = (e) => {
    setItemDesc(e.target.value);
  };
  const priceHandler = (e) => {
    setItemPrice(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      name: itemName,
      description: itemDesc,
      price: itemPrice
    };
    setProductList([...productList, newProduct]);

    setItemName("");
    setItemDesc("");
    setItemPrice("");
  };

  const handleBuyClick = (quantity, name, description, price) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === name);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity = quantity;
      updatedCartItems[existingItemIndex].price = price * quantity;
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        name: name,
        description: description,
        price: price * quantity,
        quantity: quantity
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="header">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="name"
            value={itemName}
            onChange={nameHandler}
          />
          <label htmlFor="desc">Description: </label>
          <input
            type="text"
            className="description"
            value={itemDesc}
            onChange={descHandler}
          />
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            className="price"
            value={itemPrice}
            onChange={priceHandler}
          />
          <button type="submit">Add</button>
        </div>
      </form>
      <div className="list">
        <ul>
          {productList.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              handleBuyClick={handleBuyClick}
            />
          ))}
        </ul>
      </div>
      <div className="cart">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Header;
