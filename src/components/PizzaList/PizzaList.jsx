import React, { useEffect, useRef } from "react";
import "./PizzaList.css";
import CustomCursor from "../CustomCursor/CustomCursor";
import AOS from "aos";
import "aos/dist/aos.css"; 



const PizzaList = ({ addToCart }) => {

   useEffect(() => {
      AOS.init({
        duration: 1000, // Длительность анимации в миллисекундах
        once: false,     // Анимация срабатывает только один раз при скролле
      });
    }, []);

 
    // Создаем рефы для секций
    const pizzaRef = useRef(null);
    const sushiRef = useRef(null);
    const hrumRef = useRef(null);
    const drinkRef = useRef(null);
    const sousRef = useRef(null)
  
    // Функция для плавной прокрутки
    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      
    }
    
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
        name:"Филадельфия",
        ingredients:"Сливочный сыр, семга татаки с тростниковым сахаром",
        price: 395,
        tag:"",
        image:"/Rectangle 4 (9).png",
    },
    {
        id: 2,
        name:"Супер Филадельфия",
        ingredients:"Действительно много семги, сливочный сыр, огурец, рис",
        price: 425,
        tag:"",
        image:"/Rectangle 4 (10).png",
    },
    {
        id: 3,
        name:"Тигр мама",
        ingredients:"Тигровая креветка, огурец, авокадо, соус Айоли, рис",
        price: 525,
        tag:"",
        image:"/Rectangle 4 (11).png",
    },
    {
        id: 4,
        name:"Тигр мама",
        ingredients:"Тигровая креветка, огурец, авокадо, соус Айоли, рис",
        price: 525,
        tag:"",
        image:"/Rectangle 4 (11).png",
    },
    {
        id: 5,
        name:"Супер Филадельфия",
        ingredients:"Действительно много семги, сливочный сыр, огурец, рис",
        price: 425,
        tag:"",
        image:"/Rectangle 4 (10).png",
    },
    
    {
        id: 6,
        name:"Филадельфия",
        ingredients:"Сливочный сыр, семга татаки с тростниковым сахаром",
        price: 395,
        tag:"",
        image:"/Rectangle 4 (13).png",
    },
    {
        id: 7,
        name:"Филадельфия кранч",
        ingredients:"Семга, рис, сыр креметто, соус унаги, креветка, авокадо",
        price: 475,
        tag:"",
        image:"/Rectangle 4 (14).png",
    },
  ];
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
];
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
      name:"Чесночный соус",
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
];

  return (
    <>
    <div className="section1">

    <div className="container">
     

      {/* Блок для пиццы */}
      <div ref={pizzaRef} className="section">
      <CustomCursor/>
        <h2>Пицца</h2>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img data-aos="fade-up" src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.ingredients}</p>
            <p>Цена: {pizza.price}₽</p>
            <button
              className="pizza-button"
              onClick={() => addToCart(pizza)}
            >
              Выбрать
            </button>
          </div>
        ))}
      </div>
       
      </div>
      </div>
    </div>
    <div className="section2">
      <div className="container">

      <div ref={sushiRef} className="section">
      
        <h2 className="h2">Суши</h2>
      <div className="sushi-list">
        {sushii.map((sushi) => (
          <div key={sushi.id} className="sushi-card">
            <img data-aos="fade-up" src={sushi.image} alt={sushi.name} />
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
    </div>
      </div>
      <div className="section3">
        <div className="container">

      <div ref={hrumRef} className="section">
       
      <h2 className="h2">Закуски</h2>
      <div className="sushi-list">
        {hrumm.map((hrum) => (
          <div key={hrum.id} className="sushi-card">
            <img data-aos="fade-up" src={hrum.image} alt={hrum.name} />
            <h2>{hrum.name}</h2>
            <p>{hrum.ingredients}</p>
            <p>Цена: {hrum.price}₽</p>
            <button
              className="sushi-button"
              onClick={() => addToCart(hrum)}
            >
              Выбрать
            </button>
          </div>

          
        ))}
      </div>
       </div>
        </div>
      </div>
      <div className="section4">
        <div className="container">

       <div ref={drinkRef}  className="section">
       
      <h2>Напитки</h2>
      <div className="drink-list">
        {drinks.map((drink) => (
          <div key={drink.id} className="drink-card">
            <img data-aos="fade-up" src={drink.image} alt={drink.name} />
            <h2>{drink.name}</h2>
            <p>{drink.ingredients}</p>
            <p>Цена: {drink.price}₽</p>
            <button
              className="drink-button"
              onClick={() => addToCart(drink)}
            >
              Выбрать
            </button>
          </div>

          
        ))}
      </div>
       </div>
        </div>
      </div>
      <div className="section5">
        <div className="container">

       <div ref={sousRef} className="section">
       
        <h2>Соусы</h2>
      <div className="sous-list">
        {souse.map((sous) => (
          <div key={sous.id} className="sous-card">
            <img data-aos="fade-up" src={sous.image} alt={sous.name} />
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
        </div>
      </div>

      
    
    </>

    
  );
};

export default PizzaList;

