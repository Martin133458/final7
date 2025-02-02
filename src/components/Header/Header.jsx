import React, { useState } from "react";
import { Link } from "react-router-dom"; // Используем Link для роутинга
import "./Header.css";

const Header = ({ cart }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="wrap1">
            

            <h1>🍕 Куда пицца</h1>
            <div className="cart">
              <Link to="/cart">🛒 {cart?.length || 0} товар(-ов)</Link> {/* Количество товаров */}
            </div>
            </div>
            <div className="nav">
            <button className="burger-menu" onClick={toggleMenu}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>

              <div className="parametrs">
                <Link to="/pizzaaa">Пицца</Link>
                <Link to="/sushiii">Суши</Link>
                <Link to="/drinkkk">Напитки</Link>
                 <Link to="/hrummm">Закуски</Link>
                 <Link to="/sousss">Соусы</Link>
              </div>
      </nav>
              <Link to="/">Меню</Link>
              <Link to="/compania">O нас</Link>
              <Link to="/Sale">Акции</Link>
            </div>
            
          
        </div>
      </header>
       <hr />
      
    </>
  );
};

export default Header;
