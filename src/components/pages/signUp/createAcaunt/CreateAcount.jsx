import React, { useState } from "react";
import styles from '../../../styles/style'
import { NavLink, useNavigate } from 'react-router-dom'
import './createAcaunt.css'
import {FaEyeSlash,FaEye}from 'react-icons/fa'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver}from '@hookform/resolvers/yup'
const CreateAcount = ({showPassword,setShowPassword, newUser,setNewUser}) => {

const schema = yup.object().shape({
  nameCompany:yup.string().required('sdsdf'),
  email:yup.string().email().required('sdsfa'),
  password:yup.string().min(4).max(20).required()
 })

    const navigate = useNavigate()


    const [dataUser,setData]=useState(null)
    console.log(dataUser);
    const { register, handleSubmit,formState:{errors} } = useForm({
        resolver:yupResolver(schema)
      });
    
    
      const onSubmit = (data) => {
           
            if (data.email && data.password && data.nameCompany) {
       setData(data)  
            
       navigate("/getCode")
  }
            
        };
  return (
    <div className='bg-[#EAEEFF]  pb-[40px] lg:h-[100vh'>
    <div className={`${styles.container} flex  justify-center  pt-[54px]   bo `}>
       <div className="creatAcaunt border  ">
           <h2>Создайте аккаунт</h2>
           <p className='info'>Выберите роль:</p>
           <div className="flex gap-[17px] pt-[22px] pb-[35px]">
               <button  className={`${newUser.worker?'worker':'bg-white'} rounded-[6px] pl-[54px] pr-[54px]  pt-[21px] pb-[21px] border`} onClick={()=>setNewUser({worker:true,employer:false})}>
            Я соискатель
          
               </button>
               <button onClick={()=>setNewUser({worker:false,employer:true})}  className={`${newUser.employer? 'employer':'bg-white'} rounded-[6px] pl-[54px] pr-[54px]  pt-[21px] pb-[21px] border`}>
              Я работодатель
    
               </button>
               </div>
               <form action=""
                onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[16px]   mb-[20px]'>
                <label >
     <input type="text" placeholder='Наименование компании' className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border' {...register("nameCompany")} /></label>
                <label ><input type="email" placeholder='Электронная почта' className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'
                {...register("email")} /></label>
        {
            showPassword?    <label className='relative mb-[20px]' ><input type="text" placeholder='Пароль'
            className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border' 
            {...register("password")}/>
            {
               showPassword?<FaEye className='absolute top-5 right-[23px] text-[20px] ' onClick={()=>setShowPassword(false)}/>:<FaEyeSlash  onClick={()=>setShowPassword(true)} className='absolute top-5 right-[23px] text-[20px]' />
            }
            </label>:    <label className='relative mb-[20px]' ><input type="password" placeholder='Пароль'
                className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'
                {...register("password")} />
                {
                   showPassword?<FaEye className='absolute top-5 right-[23px] text-[20px]  ' onClick={()=>setShowPassword(false)}/>:<FaEyeSlash  onClick={()=>setShowPassword(true)} className='absolute top-5 right-[23px] text-[20px]
                    text-[#AAAAAA]  ' />
                }
                </label>

               
           
        }
             <button type="submit"  className="rounded-[30px] mt-[60px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]"    >
войти

                 </button>
        
            
       
               </form>
      
           <p className=' flex justify-center gap-2 text-[#A9ABB4]  '>У вас уже есть аккаунт? <a href="/" className='text-black'>Войти</a></p>
       </div>
   </div> 

</div> 
  )
}

export default CreateAcount