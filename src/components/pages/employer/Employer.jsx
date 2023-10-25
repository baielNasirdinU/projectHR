import React from 'react'
import styles from '../../styles/style'
import Button from '../../buttons/Button'
import './employ.css'
import mask from '../../img/mask.png'
import john from '../../img/john.png'

const Employer = () => {
  return (
    <div>
        <div className={`${styles.container}  flex gap-[16px] mt-[120px] mb-[120px]`}>
            
            <div className="w-[670px] rounded-[20px] relative overflow-hidden bg-[#3642AD] h-[320px] flex items-center pl-[66px]">
                {/* <img src="/" alt="" /> */}
                <div className="employ">
                    <h3>Работодатель</h3>
                    <p className='employInfo'>Ищете в свою команду новых людей?</p>
                  <Button><a href="/" className="rounded-[30px] pl-[40px] pr-[40px] pt-[15px] pb-[15px] border">Зарегистрироваться
          </a></Button>
          <div className="w-[450px] h-[300px] bg-[#2EB9FF]  absolute right-[-150px] top-[-100px]  rounded-br-[50%] rotate-45 "></div>
          <img src={mask} alt="" className='absolute top-0 right-[-10px]' />
                </div>
            </div>
            <div className="w-[670px] rounded-[20px] relative overflow-hidden bg-[#3642AD] h-[320px] flex items-center pl-[66px]">
                {/* <img src="/" alt="" /> */}
                <div className="employ">
                    <h3>Соискатель</h3>
                    <p className='employInfo'>Ищете достойную работу?</p>
                  <Button><a href="/" className="rounded-[30px] pl-[40px] pr-[40px] pt-[15px] pb-[15px] border">Зарегистрироваться
          </a></Button>
          <div className="w-[400px] h-[600px] bg-white  absolute right-[-40px] top-[20%] rounded-tl-[50%] rotate-45"></div>
          <img src={john} alt="" className='absolute top-[20px] right-0' />
    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employer