import React from 'react'
import "./Sous.css"
import { useParams } from 'react-router-dom';

const Sous = () => {
    
    const { id } = useParams();

    const souse = [
        {
            id: 0,
            name: "Горчичный соус",
            ingredients:"",
            price: 90,
            tag:"",
            image:"/Rectangle 7.png",
        },
        {
            id: 1,
            name: "Кетчуп",
            ingredients:"",
            price: 90,
            tag:"",
            image: "/Rectangle 7 (1).png",
        },
        {
            id: 2,
            name:"Чесночный сойус",
            ingredients:"",
            price: 90,
            tag:"",
            image: "/Rectangle 7 (2).png",
        },
        {
            id: 3,
            name:"Сырный соус",
            ingredients:"",
            price: 90,
            tag:"",
            image: "/Rectangle 7 (3).png",
        },
    ]
    const sous = souse.find((p) => p.id === parseInt(id));
  return (
    
      <>
       <div className="container">
      
      <h1>Соусы</h1>
      <div className="sous-list">
        {souse.map((sous) => (
          <div key={sous.id} className="sous-card">
            <img src={sous.image} alt={sous.name} />
            <h2>{sous.name}</h2>
            <p>{sous.ingredients}</p>
            <p>Цена: {sous.price}₽</p>
            <button
              className="sous-button"
              onClick={() => addToCart(sous)} 
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

export default Sous