import React from 'react'
import "./Compania.css"

const Compania = () => {
  return (
   <>
   <section>
    
        <div className="wrapp">
            <div className="blok">
                <h1>Кусочек <span>вкусной <br /> информации </span>  о нас</h1>
                <p>В чем секрет пицц "Куда пицца"? Мы им поделимся с вами. Вы <br />можете найти счастье в каждом кусочке наших пицц.</p>
            </div>
            <div className="blok1">
                    <div className="blokobj">
                        <h1>Качество и стандарты</h1>
                        <p>Только <span>халяльные</span>  продукты. Только <span>свежие<br /></span> продукты. Только самые <span>качественные <br /></span> продукты. Никаких поблажек и исключений.</p>
                        <img src="/Без названия.svg" alt="" />
                    </div>
                    <img src="/aboutQuality-6d4ba83e422207b24c8ad804d766770d.webp" alt="" />
            </div>
            <div className="blok2">
                <div className="container">

                <h1>Команда и люди</h1>
                <p> Нам важно, чтобы сотрудники приходили на работу с удовольствием. Поэтому, мы ежедневно улучшаем рабочую атмосферу, честно платим зарплату по рынку, награждаем лучших и помогаем вырасти каждому, кто трудится с нами.</p>
                <img className='img' src="/pizza.jpg" alt="" />
                <div class="photo">
                    <div class="card-1"><img src="/div1-8a99d9eb9585842d34acc4b6aa0ec710.webp" alt="" /></div>
                    <div class="card-2"><img src=" /div2-3a69f461f5ac688f71fb981bddb8da67.webp" alt="" /></div>
                    <div class="card-3"><img src="/div3-5b8a6d74df0b79f94daebf226b93dd81.webp" alt="" /></div>
                    <div class="card-4"><img src="/div4-8121ab8e2836b7930037dc330f5afbb9.webp" alt="" /></div>
                    <div class="card-5"><h1 className='h1'>🍕 Куда пицца</h1></div>
                    <div class="card-6"><img src="/div6-4309a4ca2a1a32e1168e9e7c899b9e37.webp" alt="" /></div>
                 </div>
                </div>
            </div>
        </div>
    
   </section>
   </>
  )
}

export default Compania