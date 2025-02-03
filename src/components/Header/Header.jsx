
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./Header.css";


const Header = ({ cart }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      once: false,     // Анимация срабатывает только один раз при скролле
    });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>       
        <header className="header">
          <h1 className="h2">*Для удобной навигации по сайту нажмите на колесико мыши</h1>
          <hr />
          <div className="container">
            <div className="wrap1">
              <h1>🍕 Куда пицца</h1>
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
              <div className="cart">
                <Link to="/cart">🛒 {cart?.length || 0} товар(-ов)</Link>
              </div>
            </div>
          </div>
        </header>
      <hr />
    </>
  );
};

export default Header;
