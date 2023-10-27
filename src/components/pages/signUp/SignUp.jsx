import React from 'react'
import Button from '../../buttons/Button'
import styles from '../../styles/style'
import { NavLink } from 'react-router-dom'

import './signUp.css'

const SignUp = () => {
  return (
    <div className='bg-[#EAEEFF] h-[85vh]'>
    <div className={`${styles.container} flex  justify-center  pt-[94px]   `}>
       <div className="signUp   ">
           <h2>Создайте аккаунт</h2>
           <p className='info'>Выберите роль:</p>
           <div className="flex ss:gap-[17px] pt-[22px] ss:flex-row flex-col gap-[80px]   pb-[75px]">
               <Button>
               <NavLink to="/createAcount" className="rounded-[6px] pl-[54px] pr-[54px] bg-white pt-[21px] pb-[21px] border">Я соискатель
          </NavLink>
               </Button>
               <Button>
               <NavLink to="/createAcount" className="rounded-[6px] pl-[54px] bg-white pr-[54px] pt-[21px] pb-[21px] ">Я работодатель
          </NavLink>
               </Button>
           </div>
           <p className=' flex justify-center gap-2 text-[#A9ABB4]  '>У вас уже есть аккаунт? <a href="/" className='text-black'>Войти</a></p>
       </div>
   </div> 

</div> 
  )
}

export default SignUp