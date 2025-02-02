import React from 'react'
import "./Drink.css"
import { useParams } from 'react-router-dom';

const Drink = () => {
    const { id } = useParams();

    const drinks = [
        {
            id: 0,
            name: "Adrenaline Game Fuel",
            ingredients:"",
            price: 200,
            tag:"",
            image:"/Rectangle 4 (15).png",
        },
        {
            id: 1,
            name: "Pepsi ZERO",
            ingredients:"",
            price: 200,
            tag:"",
            image:"/Rectangle 4 (16).png",
        },
        {
            id: 2,
            name: "Pepsi",
            ingredients:"",
            price: 200,
            tag:"",
            image:"/Rectangle 4  (17).png",
        },
        {
            id: 3,
            name: "Mild Cherry",
            ingredients:"",
            price: 200,
            tag:"",
            image:"/Rectangle 4  (18).png",
        },
        {
            id: 4,
            name: "Pepsi Zero White",
            ingredients:"",
            price: 200,
            tag:"",
            image:"/Rectangle 4  (19).png",
        },
        {
            id: 5,
            name: "Mirinda",
            ingredients:"",
            price: 200,
            tag:"",
            image:"/Rectangle 4  (20).png",
        },
        {
            id: 6,
            name: "Adrenaline Game Fuel",
            ingredients:"",
            price: 200,
            tag:"",
            image:"/Rectangle 4 (15).png",
        },
        {
            id: 7,
            name: "Pepsi ZERO",
            ingredients:"",
            price: 200,
            tag:"",
            image:"/Rectangle 4 (16).png",
        },
    ]





    const drink = drinks.find((p) => p.id === parseInt(id));
  return (
   <>
    <div className="container">
      
      <h1>Напитки</h1>
      <div className="drink-list">
        {drinks.map((drink) => (
          <div key={drink.id} className="drink-card">
            <img src={drink.image} alt={drink.name} />
            <h2>{drink.name}</h2>
            <p>{drink.ingredients}</p>
            <p>Цена: {drink.price}₽</p>
            <button
              className="drink-button"
              onClick={() => addToCart(drink)} // Добавление товара в корзину
            >
              Выбрать
            </button>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

export default Drink