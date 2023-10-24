import style from "../../styles/style"
import Button from '../../buttons/Button'
import mainImg from '../../img/главная 1.png'
import './intro.css'

import {FaSearch}from 'react-icons/fa'
const Intro = () => {
  return (
    <div className="main-bg">
    <div className={`${style.container} flex  justify-between items-center h-[85vh]  `}>
        <div className=" w-[60%] intro ">
            <h1 className="capitalize title mb-[50px]">Поиск работы по всему Кыргыстану</h1>
            <div className="flex mb-[30px] w-[80%] rounded-[20px] justify-between pl-[9px] pr-[9px] items-center h-[68px] bg-[#FFFFFF] ">
          <div className="flex  relative ">  <FaSearch id='input' className=" absolute top-[10px]
            text-[#5C5B5B] w-[28px] h-[28px] "/>
                <input type="text" className=" pl-[40px] outline-none h-[50px]" id='input'name="input" placeholder="Какую работу ищете?" /></div>
                <Button></Button>
            </div>
            <div className="flex">
                <p className="p  h-[24px] text-[#696969]">Часто ищут:</p>
            <div className="flex flex-wrap">
            <Button ></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </div>

            </div>
        </div>
        <div className="mainImg  w-[800px]">
            <img src={mainImg} alt="main image" />
        </div>
    </div></div>
  )
}

export default Intro