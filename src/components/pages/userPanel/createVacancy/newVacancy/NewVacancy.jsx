import React from 'react'
import './newVacancy,.css'
import Fortylines from '../../../../img/FortylinesLogo.png'

const NewVacancy = ({data}) => {
  return (
<div className='flex lg:gap-[100px] gap2'>

    <div className="lg:w-[650px] w-[50%] newVacancy">
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
    <div className=" ">
        <div className=" border-b-2 mb-[20px] pb-[20px]">
            <p className='text-[#D1D1D1]'>локация</p>
            <h2>{data.data.country},{data.data.city}</h2>
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
  )
}

export default NewVacancy