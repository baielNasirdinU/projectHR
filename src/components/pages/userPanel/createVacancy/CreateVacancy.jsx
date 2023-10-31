import styles from "../../../styles/style"
import './createVacancy.css'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver}from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    select: yup.string().required()
   })
  

const CreateVacancy = () => {
    
  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  });
const navigate=useNavigate()

  const onSubmit = (data) => {

   
    console.log(data);
    navigate('/userPanel')
  
  };

  return (
    <div className="mb-[230px]">
        <div className={`${styles.container} newVacancy  border`}>
<div className="sm:w-[50%] lg:w-[40%] w-full ">
    
<h2 className="title">Добавление новой вакансии </h2>
            <div className="fortynlines">
                <img src="/" alt="" />
                <a href="#">Fortylines IO</a>
            </div>
            <div className="aboutCompany mb-[40px] mt-[60px]">
                <h3>О компании</h3>
                <p>Fortylines IO - это молодая, современная команда профессионалов с опытом создания успешных ИТ-решений. Мы компания по разработке программного обеспечения, которая предоставляет инновационные решения, адаптированные к потребностям бизнеса наших клиентов. Наши центры разработки расположены в Кыргызской Республике и Германии.</p>
            </div>


               <form action="" onSubmit={handleSubmit(onSubmit)} className="createForm">
                    <label className=" border bg-red-700">
                  <h3>  Позиция</h3>
   
                     <select  {...register("select")} className="p-3 border w-full mb-[20px]">
                    <option value="" selected disabled hidden>-Выберите-</option>
  <option    >Административный ассистент</option>
  <option   >Бухгалтер</option>
  <option >Веб-разработчик</option>
  <option >Главный бухгалтер</option>
  <option >Дизайнер</option>
  <option >Инженер</option>
  <option >Контент-менеджер</option>
</select>
<div className=""><input type="checkbox" /><span>Нужная позиция отсутствует в списке</span></div>

                </label >

                <label  className="  ">
              <h3>  Отрасль</h3>

                <select className="p-3 border  w-full  mb-[40px]" >
                <option value="" selected disabled hidden>-Выберите-</option>
  <option value="volvo">Автомобильный бизнес</option>
  <option value="saab">Административный персонал</option>
  <option value="vw">Безопасность</option>
  <option value="vw">Высший и средний менеджмент</option>
  <option value="vw">Добыча сырья</option>
  <option value="vw">Домашний обслуживающий персонал</option>
  <option value="vw">Закупки</option>
</select>


                </label >
                <label  className="mb-[40px] ">
              <h3>  Описание к вакансии</h3>

       <textarea className="w-full h-[130px] border outline-none p-2" placeholder={`Например: 
           Ищем человека, который желает развиваться в сфере  маркетинга и PR.
           Главное для нас это Ваша готовность обучаться и развиваться вместе с нами.`} >

       </textarea>


                </label>
                <label  className="">
              <h3 className="mt-[40px]">  Требуемые навыки</h3>

       <textarea className="w-full h-[130px] border p-2 outline-none" placeholder="Например: 
   Уверенный пользователь ПК;
   Знание английского языка, уровень свободного  общения;
   Ведение документооборота;
   и т.д.">

       </textarea>


                </label>

                <label className="flex mt-[40px] gap-[14px]">
                <select className="p-3 border w-full mb-[20px] h-[60px]">
                <option value="" selected disabled hidden>Фиксированная</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="vw">VW</option>
</select>
<input type="number" className="outline-none border h-[60px]"/>
<select className="p-3 border w-full h-[60px] mb-[20px]">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="vw">usd</option>
  <option value="audi" selected>сом</option>
</select>
                </label>
                <label  className="mt-[40px]  ">
              <h3>  Вид занятости</h3>

                <select className="p-3 border  w-full mb-[20px]">
                <option value="" selected disabled hidden>-Выберите-</option>
  <option value="volvo">Полная занятость</option>
  <option value="saab">Частичная занятость </option>
  <option value="vw">Временная занятость</option>
  <option value="vw">Фриланс / Самозанятость</option>
  <option value="vw">Волонтерство</option>
</select>


                </label >
                <label class="">
                    <h3>Опыт работы/стаж</h3>
  <input type="radio" name="radio"  checked="checked"/>
<span>  Не имеет значения</span><br />

  <input type="radio" name="radio" />
  <span>От 1 года до 3 лет</span><br />
  <input type="radio" name="radio" />
  <span>От 3 лет до 6 лет</span><br />
  <input type="radio" name="radio" />
  <span>Более 6 лет</span>
</label>
<label className="m3">
    <h3>Контактная информация</h3>
    <select className="p-3 border  w-full mb-[20px]">
                <option value="" selected disabled hidden>-Выберите-</option>
  <option value="volvo">Кыргызстан</option>
 
</select>
    <input type="text"  value="бишкек" className="w-full outline-none h-[60px] border mb-[20px]"/>
    <input type="text"  value="ул. Токтогула 112/1 " className="w-full outline-none h-[60px] border mb-[40px]"/>
</label>
<label  className="mt-[40px]  ">
              <h3> Дополнительная информация </h3>
              <textarea className="w-full h-[130px] border p-2 outline-none" placeholder="Например: 
      Условие работы;
      График работы;
      Социальные сети, ссылки;
      и т.д.
">

       </textarea>

              


                </label >
     {/* <div className="flex"> */}
     <button  className="rounded-[30px] mt-[60px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]">Разместить вакансию</button>
                {/* <button  className="rounded-[30px] mt-[60px]  pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]">Отмена</button> */}
   
            </form>
</div>
        </div>
    </div>
  )
}

export default CreateVacancy