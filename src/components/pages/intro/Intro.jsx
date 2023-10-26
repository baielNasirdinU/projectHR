import style from "../../styles/style"
import Button from '../../buttons/Button'
import mainImg from '../../img/главная 1.png'
import './intro.css'

import {FaSearch}from 'react-icons/fa'
const Intro = () => {
  const items=[
    {
      name:'Информационные технологии',
      id:1
    },
    {
      name:'ИБухгалтерия',
      id:2
    },
    {
      name:'Искусство, развлечение ',
      id:3
    },
  
    {
      name:'Маркетинг и PR  ',
      id:4
    },
    {
      name:'Административный персонал ',
      id:5
    },
 
  
 
  ]
  return (
    <div className="main-bg pb-[150px]">
    <div className={`${style.container}   flex  lg flex-wrap justify-center lg:justify-between lg:h-[85vh] items-center  `}>
        <div className="   lg:w-[450px] intro w-[90%] 
        xs:mt-[80px] mt-0  flex flex-col items-center ">
            <h1 className="capitalize title mb-[50px] b ss:text-[42px] xs:text-[22px]
             md:text-[56px] lg:text-[55px]">Поиск работы по всему Кыргыстану</h1>
            <div className="flex mb-[30px]  w-[100%] rounded-[20px] justify-between pl-[9px] pr-[9px] items-center h-[68px] bg-[#FFFFFF] ">
          <div className="flex  relative  ">  <FaSearch id='input' className=" absolute top-[10px]
            text-[#5C5B5B] w-[28px] h-[28px] "/>
                <input type="text" className=" pl-[40px] pr-2  outline-none h-[50px]" id='input'name="input" placeholder="Какую работу ищете?" /></div>
                <Button> <a href="/" className="rounded-[30px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] border">Поиск
          </a></Button>
            </div>
            <div className="flex">
                <p className="p  h-[24px] text-[#696969]">Часто ищут:</p>
 <div className="flex flex-wrap gap-3 ">
 {
        items.map((item ,idx)=>{
          return(
            <div className="mb-[8px] border piece" key={item.id}>
            <Button ><a href="/" className={`title  opacity-[0.5] rounded-[30px] mr-[8px] pl-[13px] pr-[13px]  pt-[10px] pb-[10px]
             border
             ${idx / 2 ===0 ?'border-2 border-rose-600 bg-[#F03737]opacity-[0.2 text-[red] ]': idx / 2 ===1 ?'border-2 border-[#9C22B0] text-[#9C22B0] ':'border-2 border-[blue] text-[blue]'}`}>{item.name}</a></Button>
          
            </div>
          )
        })
      }
 </div>

            </div>
        </div>
        <div className="mainImg  xs:w-[90%]  xs:mt-[40px] lg:m-0 lg:w-[750px]    order-first lg:order-2   ">
            <img src={mainImg} alt="main image" className="w-full" />
        </div>
    </div></div>
  )
}

export default Intro