import React from "react";
import "./Sushi.css";

const Sushi = ({ addToCart }) => {
  const sushii = [
    {
      id: 0,
      name: "Филадельфия кранч",
      ingredients: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
      price: 475,
      tag: "ХИТ",
      image: "/Rectangle 5.png",
    },
    {
      id: 1,
      name: "Филадельфия",
      ingredients: "Сливочный сыр, семга татаки с тростниковым сахаром",
      price: 395,
      tag: "НОВИНКА",
      image: "/Rectangle 6.png",
    },
    {
      id: 2,
      name:"Супер Филадельфия",
      ingredients:"Действительно много семги, сливочный сыр, огурец, рис",
      price:425,
      tag:"",
      image:"/Rectangle 6 (1).png",
    },
    {
      id: 3,
      name:"Тигр мама",
      ingredients:"Тигровая креветка, огурец, авокадо, соус Айоли, рис",
      price:525,
      tag:"",
      image:"/Rectangle 6 (2).png",
    },
    {
      id: 4,
      name:"Тигр мама",
      ingredients:"Тигровая креветка, огурец, авокадо, соус Айоли, рис",
      price:525,
      tag:"",
      image:"/Rectangle 6 (2).png",
    },
    {
      id: 5,
      name:"Супер Филадельфия",
      ingredients:"Действительно много семги, сливочный сыр, огурец, рис",
      price:425,
      tag:"",
      image:"/Rectangle 6 (1).png",
    },
    {
      id: 6,
      name: "Филадельфия",
      ingredients: "Сливочный сыр, семга татаки с тростниковым сахаром",
      price: 395,
      tag: "НОВИНКА",
      image: "/Rectangle 6.png",
    },
    {
      id: 7,
      name: "Филадельфия кранч",
      ingredients: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
      price: 475,
      tag: "ХИТ",
      image: "/Rectangle 5.png",
    },
  ];
 

  return (
    <div className="container">
      
      <h1>Суши</h1>
      <div className="sushi-list">
        {sushii.map((sushi) => (
          <div key={sushi.id} className="sushi-card">
            <img src={sushi.image} alt={sushi.name} />
            <h2>{sushi.name}</h2>
            <p>{sushi.ingredients}</p>
            <p>Цена: {sushi.price}₽</p>
            <button
              className="sushi-button"
              onClick={() => addToCart(sushi)}
            >
              Выбрать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sushi;
