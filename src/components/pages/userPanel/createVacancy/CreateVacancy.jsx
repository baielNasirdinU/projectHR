import styles from "../../../styles/style";
import "./createVacancy.css";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import NewVacancy from "./newVacancy/NewVacancy";
import Fortylines from '../../../img/FortylinesLogo.png'
import { RiPencilLine}from 'react-icons/ri'


const schema = yup.object().shape({
  selectPosition: yup.string().required(),
  selectIndustry: yup.string().required(),
  selectCurrency: yup.string().required(),
  selectEmploymenet: yup.string().required(),
  money:yup.number().positive().integer().required(),
  selectSalary: yup.string().required(),
  selectExperience: yup.string().required('Please select an option'),
  checked: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
  vacancy: yup.string().required("name is required"),
  skills: yup.string().required("name is required"),
  country: yup.string().required("name is required"),
  city: yup.string().required("name is required"),
  address: yup.string().required("name is required"),
  moreInformation: yup.string().required("name is required"),
});

const CreateVacancy = () => {
  const [addVacancy,setAddVacancy]=useState(false)
  const [data,setData]=useState([])
  const [edit,setEdit]=useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(schema)
  });
  // const navigate = useNavigate();
  const date = () => {
    return new Date();
  };

  const onSubmit = (data) => {
    setData({data,  date: date().toLocaleDateString() });
    // navigate("/userPanel");
    // dataHandle(data)
    setAddVacancy(true)
  };
 const selectOne = ["Административный ассистент","Бухгалтер", "Веб-разработчик","Главный бухгалтер","Дизайнер","Инженер","Контент-менеджер"]
 const selectTwo = ["Автомобильный бизнес", "Административный персонал"," Безопасность","Высший и средний менеджмент","Добыча сырья"," Домашний обслуживающий персонал","Закупки","Инженер","Контент-менеджер"]

 const selectThree= ['sdf','sadf','sdaf']
 const selectFour= ['сом','kz','ru','usd']
 const selectFive= ['Полная занятость','Частичная занятость','Временная занятость','  Фриланс / Самозанятость','Волонтерство']
 const inputRadio= ['Без опыта','От 1 года до 3 лет','От 3 лет до 6 лет','Более 6 лет']
 const countries=['kyrgyzstan1','kyrgyzstan2','kyrgyzstan3','kyrgyzstan4','kyrgyzstan5',
 ]

// console.log(data);
  return (
    <div className="mb-[230px]">
      <div className={`${styles.container} newVacancy mt-[65px] `}>
       {
        addVacancy?<NewVacancy data={data}  setAddVacancy={setAddVacancy} setEdit={setEdit}/>: <div className="sm:w-[50%] lg:w-[650px] w-full ">
        <h2 className="title relative" >Добавление новой вакансии  {edit?<RiPencilLine className="absolute right-0 top-0 text-[34px]"/>:''}
        </h2>


        <div className="fortynlines flex items-center gap-[20px]">
          <img src={Fortylines} alt="Fortylines" className="w-[70px] h-[70px] rounded-[50%]" />
          <a href="#">Fortylines IO</a>
        </div>
        <div className="aboutCompany mt-[60px]">
          <h3>О компании</h3>
          <p className="border p-4">
            Fortylines IO - это молодая, современная команда профессионалов с
            опытом создания успешных ИТ-решений. Мы компания по разработке
            программного обеспечения, которая предоставляет инновационные
            решения, адаптированные к потребностям бизнеса наших клиентов.
            Наши центры разработки расположены в Кыргызской Республике и
            Германии.
          </p>
        </div>

        <form
      
          onSubmit={handleSubmit(onSubmit)}
          className="createForm flex flex-col "
        >
     

          <label>
            <h3> Позиция</h3>

            <select 
  
              {...register("selectPosition")}   
              className="p-3 border w-full mb-[20px]"
             >
              <option value=""  hidden>  -Выберите-</option>
              {
                selectOne.map((item )=>
              <option value={item} key={item} >
                {item}
              </option>)
              }
             
            </select>
          </label>
            <label className=" flex  justify-end gap-2 ">
              <input type="checkbox" className="w-[20px]" {...register("checked")} />
              <span
                className={`${errors.checked?.message ? "text-red-500" : ""}`}
              >
                Нужная позиция отсутствует в списке
              </span>
            </label>

          <label >
            <h3> Отрасль</h3>

            <select placeholder="jjdf"
              {...register("selectIndustry")} 
              className="p-3 border  w-full  "
            >
              <option value=""  hidden>  -Выберите-</option>
              {
                selectTwo.map((item )=>
              <option value={item} key={item} >
                {item}
              </option>)
              }
             
              
              
  
            </select>
          </label>
          <label >
            <h3 > Описание к вакансии</h3>

            <textarea
              {...register("vacancy")}
              className="w-full h-[140px] border outline-none p-2"
              placeholder={`Например: 
         Ищем человека, который желает развиваться в сфере  маркетинга и PR.
         Главное для нас это Ваша готовность обучаться и развиваться вместе с нами.`}
            ></textarea>
          </label>
          <label >
            <h3 > Требуемые навыки</h3>

            <textarea
              {...register("skills")}
              className="w-full h-[140px] border p-2 outline-none"
              placeholder="Например: 
 Уверенный пользователь ПК;
 Знание английского языка, уровень свободного  общения;
 Ведение документооборота;
 и т.д."
            ></textarea>
          </label>

           <label>
            <h3 >Оклад</h3>
            <label className="flex  gap-[14px]">
              <select 
                {...register("selectSalary")}   
                className="p-3 border w-full mb-[20px] h-[60px]"
              >
            
                <option value="" hidden>Фиксированная</option>

                {
                selectThree.map((item )=>
              <option value={item} key={item} >
                {item}
              </option>)
              }
              </select>
              <input {...register("money")} type="number" className="outline-none border pl-4 text-[24px] h-[60px] w-[200px]" />
              <select
                {...register("selectCurrency")}  
                className="p-3 border w-full h-[60px] mb-[20px]"
              >
               {
                selectFour.map((item)=>
                <option value={item} key={item}>{item}</option>)
               }

              </select>
            </label>
          </label> 
          <label >
            <h3 > Вид занятости</h3>

            <select 
              {...register("selectEmploymenet")}
              className="p-3 border  w-full mb-[20px]"
            >
              <option value="" hidden>-Выберите-</option>
           
             {
              selectFive.map((item)=>
              <option key={item} value={item}>
                {item}
              </option>)
             }
            </select>
          </label>
          <h3>Опыт работы/стаж</h3>
         {
          errors.selectOption?.message? <label >
          <input    type="radio"  defaultChecked  />
          <span> Не имеет значения</span>
         </label>:''
         }

{
inputRadio.map((item=>

       
      <label  key={item}>
              < input type="radio"    {...register("selectExperience")}  value={item}   />
            <span className="pl-4 text-[18px]">{item}</span>
      </label>
           
  ))

}



      
          
          <label>
            <h3  >Контактная информация</h3>
            <select 
              {...register("country")}
              className="p-3 border  w-full mb-[20px]"
            >
              <option value="" hidden>countries</option>
           
             {
              countries.map((item)=>
              <option key={item} value={item}>
                {item}
              </option>)
             }
            </select>
        
          </label>
          <label>    <input {...register("city")}
              type="text"
              placeholder="city"
             
              className="w-full outline-none h-[60px] p-4 border mb-[20px]"
            />
            <input {...register("address")}
              type="text"
              placeholder="address"
           
              className="w-full outline-none pl-4 h-[60px] border mb-[40px]"
            /></label>
          <label > 
            <h3 > Дополнительная информация </h3>
            <textarea {...register("moreInformation")}
              className="w-full h-[130px] border p-2 outline-none"
              placeholder="Например: 
    Условие работы;
    График работы;
    Социальные сети, ссылки;
    и т.д.
"
            ></textarea>
          </label> 
      <div className="flex justify-end gap-[20px]">
      <button
            type="submit"
            className="rounded-[30px] mt-[60px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px]   text-[20px]  
             border font-[2000]"
          >
                  {edit?'Сохранить ':'    Разместить вакансию'}
          </button>
          <button  >
          <a href="/userPanel" className="rounded-[30px] mt-[60px]  pl-[20px] pr-[20px] pt-[13px] pb-[13px] block text-[#AEB0B2] text-[20px]  w-full border-4  font-[2000]">
          Отмена

          </a>
          </button>
      </div>
        </form>
      </div>
       }
      </div>
    </div>
  );
};

export default CreateVacancy;
