import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../../styles/style'
import './fogetCode.css'


const FogetCode = () => {
  return (
    <div className='bg-[#EAEEFF]  pb-[20px] lg:h-screen'>
    <div className={`${styles.container} flex  justify-center  pt-[54px]   border `}>
       <div className=" fogetCode  lg:w-[449px] ">
           <h2>Забыли пароль?</h2>
           <p className='info'>Пожалуйста, подтвердите свой адрес электронной почты ниже, и мы вышлем вам проверочный код</p>
        
               <form action="" className='flex flex-col gap-[16px]  mb-[20px]'>
            
                <label ><input type="email" placeholder='Электронная почта'
                 className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border' /></label>
      
  
     <button type='submit' className='w-full '>  <NavLink to="/createCode" className="rounded-[30px] mt-[60px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]">Продолжить</NavLink>
          </button>
               </form>
      
           <p className=' flex justify-center gap-2 text-[#A9ABB4]  '>У вас уже есть аккаунт? <a href="/" className='text-black'>Войти</a></p>
       </div>
   </div> 

</div> 
  )
}

export default FogetCode