import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import PizzaList from "./components/PizzaList/PizzaList";
import Pizza from "./components/Pizza/Pizza";
import Header from "./components/Header/Header";

import Cart from "./components/Cart/Cart"; // Импортируем компонент корзины
import Sushi from "./components/Sushi/Sushi";
import SushiList from "./components/SushiList/SushiList";
import Hrum from "./components/Hrum/Hrum";
import Drink from "./components/Drink/Drink";
import Sous from "./components/Sous/Sous";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Footer from "./components/Footer/Footer";
import Support from "./components/Support/Support";
import Compania from "./components/Compania/Compania";
import Salee from "./components/Salee/Salee";
import Garant from "./Garant/Garant";


const App = () => {
  const [cart, setCart] = useState([]); // Состояние для корзины

  // Функция добавления товаров в корзину
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Функция очистки корзины
  const clearCart = () => {
    setCart([]); // Очищает корзину
  };
  const longText =
    "Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.";
  

  return (
    <>
      <Header cart={cart} />
      
      <Routes>
        <Route path="/" element={<PizzaList addToCart={addToCart} />} />
        <Route path="/pizza/:id" element={<Pizza addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
        <Route path="/sushi" element={<SushiList addToCart={addToCart} />} />
        <Route path="/sushi/:id" element={<Sushi addToCart={addToCart} />} />
        <Route path="/hrum" element={<Hrum addToCart={addToCart} />} />
        <Route path="/drink" element={<Drink addToCart={addToCart}/>}/>
        <Route path="/sous" element={<Sous addToCart={addToCart}/>}/>
        <Route path="/text" element={<ExpandableText title="Доставка пиццы в Москве" content={longText} />}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/compania" element={<Compania/>}/>
        <Route path="/Sale" element={<Salee/>}/>
        <Route path="/garant" element={<Garant/>}/>
        <Route path="/pizzaaa" element={<Pizza/>}/>
        <Route path="/sushiii" element={<Sushi/>}/>
        <Route path="/drinkkk" element={<Drink/>}/>
          <Route path="/hrummm" element={<Hrum/>}/>
            <Route path="/sousss" element={<Sous/>}/>
    
      </Routes>
      <Footer cart={cart}/>
    </>
  );
};

export default App;

