import React from "react";
import "./Cart.css";
import CustomCursor from "../CustomCursor/CustomCursor";

const Cart = ({ cart, clearCart }) => {
  return (
    <div className="container">
      <CustomCursor/>
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img className="img" src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Цена: {item.price}₽</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-actions">
            <button onClick={clearCart} className="clear-cart-button">
              Очистить корзину
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;






















