import React from "react";
import { Link } from "react-router-dom"; // Используем Link для роутинга
import "./Header.css";

const Header = ({ cart }) => {


 

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="wrap">
            <h1>🍕 Куда пицца</h1>
            <div className="nav">
              <Link to="/">Меню</Link>
              <Link to="/compania">O нас</Link>
              <Link to="/Sale">Акции</Link>
              <div className="parametrs">
                <Link to="/pizzaaa">Пицца</Link>
                <Link to="/sushiii">Суши</Link>
                <Link to="/drinkkk">Напитки</Link>
                 <Link to="/hrummm">Закуски</Link>
                 <Link to="/sousss">Соусы</Link>
              </div>
            </div>
            <div className="cart">
              <Link to="/cart">🛒 {cart?.length || 0} товар(-ов)</Link> {/* Количество товаров */}
            </div>
            
          </div>
        </div>
      </header>
       <hr />
      
    </>
  );
};

export default Header;
