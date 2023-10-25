import React from 'react'
import styles from '../styles/style'
import logo from '../img/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='mt-[57px] pb-[50px] bg-[#F4F6FF] h-[412px]'>
        <div className={`${styles.container}`}>
            <div className="flex justify-between footer">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="contact flex flex-col">
                    <h4>Контакты</h4>
                    <a href="https://yandex.com/maps/geo/771290125/?ll=74.586871%2C42.899532&z=11.36">
                    Кыргызстан, г. Бишкек
                    </a>
                    <a href="https://yandex.com/maps/10309/bishkek/house/Y00YcAdiSEUFQFpofXR2c3xmbA==/?ll=74.602102%2C42.872058&z=16.59">ул. Токтогула 112/1</a>
                    <a href="tel:+996 (706) 11 22 33">+996 (706) 11 22 33</a>
                </div>
                <div className="contact flex flex-col">
                    <h4>Соискателям</h4>
                    <a href="/">
                    Личный кабинет
                    </a>
                    <a href="/вакансия">Вакансии</a>
                    <a href="/">Работодатели</a>
                </div>
                <div className="contact flex flex-col">
                    <h4>Работодателям</h4>
                    <a href="/">
                    Личный кабинет
                    </a>
                    <a href="/вакансия">Опубликовать вакансии</a>
                    <a href="/">Кандидаты</a>
                </div>
                <div className="contact flex flex-col">
                    <h4>Меню</h4>
                    <a href="/вакансии">
                    Вакансии
                    </a>
                    <a href="/FAQ">FAQ</a>
                    <a href="/">Контакты</a>
                </div>
                <div className="contact flex flex-col">
                    <h4>Поддержка</h4>
                    <a href="/вакансии">
                    Правила размещения вакансий
                    </a>
                    <a href="/">Политика конфиденциальности</a>
                    <a href="/">Контакты</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer