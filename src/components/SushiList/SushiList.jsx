import React from "react";
import { useParams } from "react-router-dom";
import "./SushiList.css";

const SushiList = () => {
  const { id } = useParams(); 

  // Список суши
  const sushii = [
    {
      id: 0,
      name: "Филадельфия кранч",
      ingredients: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
      price: 475,
      tag: "ХИТ",
      image: "/images/Rectangle 5.png", 
    },
    {
      id: 1,
      name: "Калифорния",
      ingredients: "Краб, рис, авокадо, икра масаго",
      price: 550,
      tag: "НОВИНКА",
      image: "/images/Rectangle 6.png", 
    },
  ];

  
  const sushi = sushii.find((item) => item.id === parseInt(id));

 
  if (!sushi) {
    return <h2>Суши не найдены</h2>;
  }

  return (
    <div className="container">
      <div className="sushi-details">
        <img className="sushi-image" src={sushi.image} alt={sushi.name} />
        <div className="details">
          {sushi.tag && <span className="sushi-tag">{sushi.tag}</span>}
          <h1 className="sushi-name">{sushi.name}</h1>
          <p className="sushi-ingredients">{sushi.ingredients}</p>
          <p className="sushi-price">Цена: {sushi.price}₽</p>
        </div>
      </div>
    </div>
  );
};

export default SushiList;
