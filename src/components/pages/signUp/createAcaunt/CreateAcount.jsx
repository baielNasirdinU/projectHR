import React from 'react'
import styles from '../../../styles/style'
import Button from '../../../buttons/Button'
import { NavLink } from 'react-router-dom'
import './createAcaunt.css'
import {FaEyeSlash,FaEye}from 'react-icons/fa'

const CreateAcount = ({showPassword,setShowPassword}) => {
    // console.log(showPassword);
  return (
    <div className='bg-[#EAEEFF]  pb-[20px] lg:h-screen'>
    <div className={`${styles.container} flex  justify-center  pt-[54px]   border `}>
       <div className="creatAcaunt border  ">
           <h2>Создайте аккаунт</h2>
           <p className='info'>Выберите роль:</p>
           <div className="flex gap-[17px] pt-[22px] pb-[35px]">
               <Button>
               <NavLink to="/" className="rounded-[6px] pl-[54px] pr-[54px] bg-white pt-[21px] pb-[21px] border">Я соискатель
          </NavLink>
               </Button>
               <Button>
               <NavLink to="/" className="rounded-[6px] pl-[54px] bg-white pr-[54px] pt-[21px] pb-[21px] ">Я работодатель
          </NavLink>
               </Button> 
               </div>
               <form action="" className='flex flex-col gap-[16px]   mb-[20px]'>
                <label ><input type="text" placeholder='Наименование компании' className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border' /></label>
                <label ><input type="email" placeholder='Электронная почта' className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border' /></label>
        {
            showPassword?    <label className='relative mb-[20px]' ><input type="text" placeholder='Пароль'
            className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'/>
            {
               showPassword?<FaEye className='absolute top-5 right-[23px] text-[20px] ' onClick={()=>setShowPassword(false)}/>:<FaEyeSlash  onClick={()=>setShowPassword(true)} className='absolute top-5 right-[23px] text-[20px]' />
            }
            </label>:    <label className='relative mb-[20px]' ><input type="password" placeholder='Пароль'
                className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'/>
                {
                   showPassword?<FaEye className='absolute top-5 right-[23px] text-[20px]  ' onClick={()=>setShowPassword(false)}/>:<FaEyeSlash  onClick={()=>setShowPassword(true)} className='absolute top-5 right-[23px] text-[20px]
                    text-[#AAAAAA]  ' />
                }
                </label>

               
           
        }
     <button type='submit' className='w-full '>  <NavLink to="/getCode" className="rounded-[30px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[20px] pb-[20px] block h  text-[20px]  w-full border font-[2000]">Создать аккаунт
          </NavLink></button>
               </form>
      
           <p className=' flex justify-center gap-2 text-[#A9ABB4]  '>У вас уже есть аккаунт? <a href="/" className='text-black'>Войти</a></p>
       </div>
   </div> 

</div> 
  )
}

export default CreateAcount