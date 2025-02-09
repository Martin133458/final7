import React from 'react'
import "./Hrum.css"
import { useParams } from 'react-router-dom';

const Hrum = () => {
    const { id } = useParams();

    const hrumm = [
        {
            id: 0,
            name:"Филадельфия кранч",
            ingredients:"Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
            price: 475,
            tag:"",
            image:"/Rectangle 4 (8).png",
        },
        {
            id: 1,
            name:"Филадельфия крем-брюле",
            ingredients:"Филадельфия крем-брюле",
            price: 395,
            tag:"",
            image:"/Rectangle 4 (9).png",
        },
        {
            id: 2,
            name:"Супер Филадельфия",
            ingredients:"Действительно много семги, сливочный сыр, огурец, рис, н...",
            price: 425,
            tag:"",
            image:"/Rectangle 4 (10).png",
        },
        {
            id: 3,
            name:"Тигр мама",
            ingredients:"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: 525,
            tag:"",
            image:"/Rectangle 4 (11).png",
        },
        {
            id: 4,
            name:"Тигр мама",
            ingredients:"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: 525,
            tag:"",
            image:"/Rectangle 4 (11).png",
        },
        {
            id: 5,
            name:"Супер Филадельфия",
            ingredients:"Действительно много семги, сливочный сыр, огурец, рис, н...",
            price: 425,
            tag:"",
            image:"/Rectangle 4 (10).png",
        },
        
        {
            id: 6,
            name:"Филадельфия крем-брюле",
            ingredients:"Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            price: 395,
            tag:"",
            image:"/Rectangle 4 (13).png",
        },
        {
            id: 7,
            name:"Филадельфия кранч",
            ingredients:"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price: 475,
            tag:"",
            image:"/Rectangle 4 (14).png",
        },

    ]
        
    
  return (
    <>
     <div className="container">
      
      <h1>Закуски</h1>
      <div className="hrum-list">
        {hrumm.map((hrum) => (
          <div key={hrum.id} className="hrum-card">
            <img src={hrum.image} alt={hrum.name} />
            <h2>{hrum.name}</h2>
            <p>{hrum.ingredients}</p>
            <p>Цена: {hrum.price}₽</p>
            <button
              className="hrum-button"
              onClick={() => addToCart(hrum)}
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

export default Hrum