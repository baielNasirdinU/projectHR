import React from 'react'
import styles from '../styles/style'
import logo from '../img/logo.png'
// import Button from '../buttons/Button'
import './footer.css'
import {FaInstagram,FaFacebook,FaYoutube,FaTwitter}from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='  bg-[#F4F6FF] '>
        <div className={`${styles.container}  pt-[60px] `}>
            <div className="flex sm:justify-between justify-around sm:gap-0 gap-4  footer flex-wrap">
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
                <div className="contact flex flex-col">
                    <h4>Оставить заявку</h4>
                 
                       <form className=' flex flex-col gap-[10px] w-[90%] xs:w-[400px]  '>
  <label> 
    <input type="text" name="" className='h-[55px] w-full  pl-[24px] outline-none rounded-[6px]' placeholder='Ваше имя'/>
  </label>
  <label >
  <input type="text" placeholder='Ваш номер телефона'  className='h-[55px] w-full  pl-[24px] outline-none rounded-[6px]' value="" />
  </label>
  <label >
    <textarea placeholder='Сообщение' name=""  className='h-[55px] w-full  pl-[24px] outline-none rounded-[6px]' />
  </label>
<div className="flex items-end flex-col">
<button type='submit'>
  <a href="/" className="rounded-[30px] bg-[#4A6DFF]  buttonForm pl-[30px] pr-[30px] pt-[15px] pb-[15px] border"> Отправить
          </a>
  </button>
</div>
</form>
                </div>
            </div >
                <div className=" hidden lg:flex justify-between  relative">
                    <a href="/" target='_blank' className='absolute top-[-40px] left-[10%] text-[16px] text-[#A6A6A6]'>© 2023. DevsFactory. All Right Reserved.</a>
                    <div className="flex absolute right-[35%] top-[-40px] gap-[24px]">
                        <a href="https://www.instagram.com/" target='_blank'>
                        <FaInstagram   className='w-[25px] h-[25px] text-[#A6A6A6]'/>
                        </a>
                        <a href="https://ru-ru.facebook.com/" target='_blank'><FaFacebook
                          className='w-[25px] h-[25px] text-[#A6A6A6]'/></a>
                        <a href="https://www.youtube.com/" target='_blank'><FaYoutube  className='w-[25px] h-[25px] text-[#A6A6A6]'/></a>
                        <a href="https://twitter.com/?lang=ru" target='_blank'><FaTwitter  className='w-[25px] h-[25px] text-[#A6A6A6]' /></a>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Footer