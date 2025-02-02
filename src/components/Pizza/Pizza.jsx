import React from "react";
import { useParams } from "react-router-dom";
import "./Pizza.css";

const Pizza = () => {
  const { id } = useParams(); // Извлекаем ID из параметров маршрута

  const pizzas = [
    {
      id: 0,
      name: "Чикен Сладкий Чили",
      ingredients: "Курица, Лук, Перец Халапеньо,  ",
      price: 399,
      tag: "NEW",
      image: `/Rectangle 4.png`,
    },
    {
      id: 1,
      name: " Oгуречный расколбас",
      ingredients: "Курица, Лук, Перец Халапеньо, Сыр",
      price: 649,
      tag: "HIT",
      image: `/Rectangle 4 (1).png`,
    },
    {
      id: 2,
      name: " Чикен а-ля хрен",
      ingredients: "Курица, Лук, Соус Карбонара",
      price: 249,
      tag: "",
      image: `/Rectangle 4 (3).png`,
    },
    {
      id: 3,
      name: "4 сезона",
      ingredients: "Бекон, Ветчина, Грибы, Курица, Лук",
      price: 630,
      tag: "",
      image: `/Rectangle 4 (2).png`,
    },
    {
      id: 4,
      name: "4 сезона",
      ingredients: "Бекон, Ветчина, Грибы, Курица, Лук",
      price: 630,
      tag: "",
      image: `/Rectangle 4 (2).png`,
    },
    {
      id: 5,
      name: "Чикен а-ля хрен",
      ingredients: "Курица, Лук, Соус Карбонара",
      price: 249,
      tag: "",
      image: `/Rectangle 4 (3).png`,
    },
    {
      id: 6,
      name: "Огуречный расколбас",
      ingredients: "Курица, Лук, Перец Халапеньо, Сыр",
      price: 649,
      tag: "HIT",
      image: `/Rectangle 4 (1).png`,
    },
    {
      id: 7,
      name: "Чикен Сладкий Чили",
      ingredients: "Курица, Лук, Перец Халапеньо",
      price: 399,
      tag: "NEW",
      image: `/Rectangle 4.png`,
    },
  ];



  return (
    <>
    <div className="container">
      
      <h1>Пицца</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <p>Цена: {pizza.price}₽</p>
            <button
              className="pizza-button"
              onClick={() => addToCart(pizza)} // Добавление товара в корзину
            >
              Выбрать
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Pizza;

