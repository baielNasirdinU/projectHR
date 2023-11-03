import React, { useState } from 'react'
import './newVacancy,.css'
import Fortylines from '../../../../img/FortylinesLogo.png'
import {RiDeleteBin6Line,RiPencilLine}from 'react-icons/ri'
import Modal from '../../../../../modal/Modal'

const NewVacancy = ({data,setAddVacancy,setEdit}) => {
  const [showModal,setShowModal]=useState(false)
  const handleClick=()=>{
    setEdit(true)
    setAddVacancy(false)
  }


  const selectStatus=['Открыто',
    'Редактировать',"Удалить",'Архивировать','Закрыть'
  ]
  return (
<div className="">
  {
    showModal?<Modal setShowModal={setShowModal}/>:''
  }
<div className='flex  lg:gap-[100px] flex-wrap lg:flex-nowrap gap2'>
 

 <div className="lg:w-[650px]   w-[500px] mb-8 newVacancy">
     <p>Дата объявления:{data.date}</p>
     <div className="fortynlines flex items-center gap-[20px]">
       <img src={Fortylines} alt="Fortylines" className="w-[70px] h-[70px] rounded-[50%]" />
       <a href="#">Fortylines IO</a>
     </div>
       <h3 className="text-[22px] font-bold">О компании</h3>
       <p className="border p-4">
         Fortylines IO - это молодая, современная команда профессионалов с
         опытом создания успешных ИТ-решений. Мы компания по разработке
         программного обеспечения, которая предоставляет инновационные
         решения, адаптированные к потребностям бизнеса наших клиентов.
         Наши центры разработки расположены в Кыргызской Республике и
         Германии.
       </p>

       <h3>Описание к вакансии</h3>
       <ul>
         <li>{data.data.vacancy}</li>
       </ul>
       <h3>Требуемые навыки</h3>
       <ul>
         <li>{data.data.skills}</li>
       </ul>
       <h3>Контактная информация</h3>
       <ul>
         <li>{data.data.country}</li>
         <li>{data.data.city}</li>
         <li>{data.data.address}</li>
       </ul>
       <h3>Дополнительная информация </h3>
       <ul>
         <li>{data.data.moreInformation}</li>
      
       </ul>
 </div>
 <div className="">

   <div className="icons flex gap-[33px] mb-[100px] text-[28px] ">
  
   <RiPencilLine className='text-gray-600' onClick={ handleClick}/>
   <RiDeleteBin6Line className='text-red-500' onClick={()=>setShowModal(true)}/>

   </div>
   <div className="border-b-2 mb-[20px]">
  <p className='text-[#D1D1D1]  mb-2'>статус</p>
  <select 
  
  // {...register("selectPosition")}   
  className="p-3 border rounded-[30px] mb-[20px] bg-[#F3FBF9] w-[128px]"
 >
  {
    selectStatus.map((item )=>
  <option value={item} key={item} >
    {item}
  </option>)
  }
 
</select>
  </div>
     <div className=" border-b-2 mb-[20px]   pb-[20px]">
         <p className='text-[#D1D1D1] '>локация</p>
         <h2>{data.data.country}  ,{data.data.city}</h2>
     </div>
     <div className=" border-b-2  mb-[20px] pb-[20px]">
         <p className='text-[#D1D1D1]'>Отрасль</p>
         <h2>{data.data.selectIndustry}</h2>
     </div>
     <div className=" border-b-2 mb-[20px] pb-[20px]">
         <p className='text-[#D1D1D1]'>Вид Занятости</p>
         <h2>{data.data.selectEmploymenet}</h2>
     </div>
     <div className=" border-b-2  mb-[20px] pb-[20px]">
         <p className='text-[#D1D1D1]'>требуемый опыт работы/ стаж</p>
         <h2>{data.data.selectExperience}</h2>
     </div>
     <div className=" border-b-2  mb-[20px] pb-[20px] " >
         <p className='text-[#D1D1D1]'>оклад</p>
         <h2>{data.data.selectSalary}</h2>
         <h2>{data.data.money} {data.data.selectCurrency}</h2>
     </div>
 </div>
 
 


</div>

</div>
  )
}

export default NewVacancy