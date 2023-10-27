import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../../styles/style'
import './createCode.css'
import {FaEyeSlash,FaEye}from 'react-icons/fa'
// import Button from '../../../buttons/Button'

const CreateCode = ({showPassword,setShowPassword}) => {
  return (
    <div className='bg-[#EAEEFF]  pb-[20px] lg:h-screen'>
    <div className={`${styles.container} flex  justify-center  pt-[54px] lg:w-[749px]   `}>
       <div className=" createCode ">
           <h2>Создайте пароль</h2>
        
               <form action="" className='flex flex-col gap-[16px] lg:w-[500px] ss:w-[430px]  mb-[20px] '>
                 
               <label ><input type="email" placeholder='Новый пароль' className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border' /></label>
               {
            showPassword?    <label className='relative ' ><input type="text" placeholder='Введите пароль'
            className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'/>
            <a href="/fogetCode" className='absolute bottom-[-22px] left-[60%] w-full text-[#B6B6B6]'></a>
            {
               showPassword?<button><FaEye className='absolute top-5 right-[23px] text-[20px]  ' onClick={()=>setShowPassword(false)}/></button>:<button><FaEyeSlash  onClick={()=>setShowPassword(true)} className='absolute top-5 right-[23px] text-[20px]
               text-[#AAAAAA]  ' /></button>
            }
            </label>:    <label className='relative ' ><input type="password" placeholder='Введите пароль'
                className='w-full outline-none  pl-[25px] p-4 rounded-[6px]  border'/>
                {
                   showPassword?<button><FaEye className='absolute top-5 right-[23px] text-[20px]  ' onClick={()=>setShowPassword(false)}/></button>:<button><FaEyeSlash  onClick={()=>setShowPassword(true)} className='absolute top-5 right-[23px] text-[20px]
                   text-[#AAAAAA]  ' /></button>
                }
            
                </label>

               
           
        }
  
            
      
      
  
     <button type='submit' className='w-full '>  <NavLink to="/" className="rounded-[30px] mt-[40px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]">Создать
          </NavLink></button>
               </form>
      
           <p className=' flex justify-center gap-2 text-[#A9ABB4]  '>У вас уже есть аккаунт? <a href="/" className='text-black'>Войти</a></p>
       </div>
   </div> 

</div> 
  )
}

export default CreateCode