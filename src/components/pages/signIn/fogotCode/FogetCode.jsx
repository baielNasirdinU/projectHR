import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styles from '../../../styles/style'
import './fogetCode.css'

import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver}from '@hookform/resolvers/yup'


const schema = yup.object().shape({
  email:yup.string().email().required(),
 
 })

const FogetCode = () => {

  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  });
  const navigate=useNavigate()
  const onSubmit = (data) => {
    if (data.email ) {
      console.log(data);
      navigate('/createCode')

      
      
    }
  }
  return (
    <div className='bg-[#EAEEFF]  pb-[20px] lg:h-screen'>
    <div className={`${styles.container} flex  justify-center  pt-[54px]   border `}>
       <div className=" fogetCode  lg:w-[449px] ">
           <h2>Забыли пароль?</h2>
           <p className='info'>Пожалуйста, подтвердите свой адрес электронной почты ниже, и мы вышлем вам проверочный код</p>
        
               <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[16px]  mb-[20px]'>
            
                <label ><input type="email" placeholder='Электронная почта'
                 className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'{...register("email")} /></label>
    <button type='submit'  className="rounded-[30px] mt-[60px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]">  Продолжить
          </button>
      
  
   
               </form>
      
           <p className=' flex justify-center gap-2 text-[#A9ABB4]  '>У вас уже есть аккаунт? <a href="/" className='text-black'>Войти</a></p>
       </div>
   </div> 

</div> 
  )
}

export default FogetCode