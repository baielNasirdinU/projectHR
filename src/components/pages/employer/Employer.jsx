import React from 'react'
import styles from '../../styles/style'
import Button from '../../buttons/Button'
import './employ.css'
import mask from '../../img/mask.png'
import john from '../../img/john.png'

const Employer = () => {
  return (
    <div>
        <div className={`${styles.container}  flex gap-[16px] mt-[120px] mb-[120px] flex-wrap lg:flex-nowrap justify-center lg:justify-start `}>
            
            <div className="sm:w-[670px]  w-full rounded-[20px] relative overflow-hidden z-0 bg-[#3642AD]
             ss:h-[320px] flex items-center pl-[66px] h-[200px] ">
                <div className="employ">
                    <h3>Работодатель</h3>
                    <p className='employInfo'>Ищете в свою команду новых людей?</p>
                  <Button >
                  <a href="/" className="rounded-[30px]  href ss:pl-[40px] ss:pr-[40px] ss:pt-[15px] ss:pb-[15px] p-2 ">Зарегистрироваться
          </a>
                  </Button>
          <div className="w-[450px]  h-[300px] bg-[#2EB9FF] z-[-30]  absolute right-[-150px] top-[-100px]  rounded-br-[50%] rotate-45 "></div>
          <img src={mask} alt="mask" className='absolute z-[-20] top-0 right-[-20px] hidden sm:flex  ' />
                </div>
            </div>
            <div className="sm:w-[670px] w-full rounded-[20px] relative overflow-hidden bg-[#3642AD] h-[200px] ss:h-[320px] flex items-center pl-[66px]">
                <div className="employ">
                    <h3>Соискатель</h3>
                    <p className='employInfo'>Ищете достойную работу?</p>
                  <Button><a href="/" className="rounded-[30px] ss:pl-[40px] ss:pr-[40px] ss:pt-[15px] ss:pb-[15px] p-2 ">Зарегистрироваться
          </a></Button>
          <div className="sm:w-[50%]  h-[600px] bg-white  absolute right-[-40px] top-[20%] rounded-tl-[50%] rotate-45"></div>
          <img src={john} alt="john" className='absolute top-[20px] right-0 hidden sm:flex' />
    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employer