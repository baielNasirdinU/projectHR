import React from 'react'
import styles from '../../styles/style'
import { NavLink } from 'react-router-dom'
import './signIn.css'
import {FaEyeSlash,FaEye}from 'react-icons/fa'
import Button from '../../buttons/Button'
// import Button from '../../buttons/Button'

const SignIn = ({showPassword,setShowPassword}) => {
  return (
    <div className='bg-[#EAEEFF]  pb-[20px] lg:h-screen'>
    <div className={`${styles.container} flex  justify-center  pt-[54px]   border `}>
       <div className=" signIn  ">
           <h2>Войти</h2>
           <p className='info'>С возвращением! Пожалуйста, введите свои данные</p>
        
               <form action="" className='flex flex-col gap-[16px]  mb-[20px]'>
            
                <label ><input type="email" placeholder='Электронная почта' className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border' /></label>
        {
            showPassword?    <label className='relative mb-[20px]' ><input type="text" placeholder='Введите пароль'
            className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'/>
            <a href="/fogetCode" className='absolute bottom-[-22px] left-[60%] w-full text-[#B6B6B6]'>Забыли пароль ?</a>
            {
               showPassword?<button><FaEye className='absolute top-5 right-[23px] text-[20px]  ' onClick={()=>setShowPassword(false)}/></button>:<button><FaEyeSlash  onClick={()=>setShowPassword(true)} className='absolute top-5 right-[23px] text-[20px]
               text-[#AAAAAA]  ' /></button>
            }
            </label>:    <label className='relative mb-[20px]' ><input type="password" placeholder='Введите пароль'
                className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'/>
                {
                   showPassword?<button><FaEye className='absolute top-5 right-[23px] text-[20px]  ' onClick={()=>setShowPassword(false)}/></button>:<button><FaEyeSlash  onClick={()=>setShowPassword(true)} className='absolute top-5 right-[23px] text-[20px]
                   text-[#AAAAAA]  ' /></button>
                }
                <a href="/fogetCode" className='absolute bottom-[-22px] left-[60%] w-full text-[#B6B6B6]'>Забыли пароль ?</a>
                </label>

               
           
        }
  
     <button type='submit' className='w-full '>  <NavLink to="/getCode" className="rounded-[30px] mt-[60px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]">Войти
          </NavLink></button>
               </form>
      
           <p className=' flex justify-center gap-2 text-[#A9ABB4]  '>У вас уже есть аккаунт? <a href="/" className='text-black'>Войти</a></p>
       </div>
   </div> 

</div> 
  )
}

export default SignIn