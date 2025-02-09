import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import CustomCursor from '../CustomCursor/CustomCursor'

const Footer = () => {
  return (
    <>
        <hr />
    <div className="container">
        <CustomCursor/>
        <div className="wrap">
            <div className="div1">
            <h1>🍕 Куда пицца</h1>
            
            </div>
            <div className="div2">
            <h1>Информация</h1>
            <nav>
               <Link to="/compania">О компании</Link>
               <Link to="/support">Пользовательское соглашение</Link>
               <Link to="/garant">Публичная оферта</Link>
            </nav>
            </div>
          
            <div className="div4">
            <h1 className='h'>Контакты</h1>
            <nav>

           <p>📞 +998 (97) 757-44-65 <h1 className='h10'>(НЕ ЗВОНИТЬ)</h1> </p>
           <p>🗺 Москва, ул. Юных Ленинцев, д.99  </p>
            </nav>
            

            </div>
        </div>
    </div>
    </>
  )
}

export default Footer