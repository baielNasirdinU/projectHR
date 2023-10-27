
import styles from "../../styles/style"
// import {FaLocationDot} from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import Button from '../../buttons/Button'
import {FiLock}from 'react-icons/fi'
import'./vacancy.css'

const Vacancy = ({data,showInfo}) => {
    // console.log(showInfo);


  return (
    <div className={`${styles.container}   `}>
        <div className=" m-auto vacancy">
            <h2 className="title mb-[23px]">Последние вакансии</h2>
            <p className="info mb-[55px]">Найдите работу, которая соответствует вашим требованиям</p>
            <div className="data flex flex-col  items-center ">
                
             {showInfo?
              
              
                data.map((item,idx)=>{ 

                           if (idx <=2) {
                             
                             return(
                                     // item.link
                                 <a href='/' key={item.id} className="flex mb-[16px]  justify-around w-[60%]  lg:w-[1180px]  border  items-center rounded-[15px]
                                 bg-[#F1F3FB] ">
                              
                                    <div className=" flex gap-[22px] p-4  flex-col ss:flex-row ">
                                    <div className="">
                                       <img src={item.img} alt={item.img} className="w-[60px] h-[60px] rounded-[50%]"  />
                     
                                    </div>
                                       <div className="item">
                                       <h3 className="list">компания</h3>
                                        <h2 className="info">{item.name}</h2>
                                        <div className="">
                                        <FiLock />                            kyrgyzstan
                                            
                                        </div>
                                       </div>
                                    </div>
                                    <div className="item hidden lg:flex flex-col">
                                        <h3 className="list">Должность</h3>
                                        <h2 className="info">{item.Должность}</h2>
                                        <div className="">
                                        <FiLock />                            kyrgyzstan
                                         
                                        </div>
                                    </div>
                                    <div className="item hidden lg:flex flex-col">
                                        <h3 className="list">оклад</h3>
                                        <h2 className="info">{item.склад}</h2>
                                        <div >
                                        <FiLock />                            kyrgyzstan
                                        </div>
                                    </div>
                                    <div className="item hidden lg:flex flex-col">
                                        <h3 className="list">Опыт работы</h3>
                                        <h2 className="info">{item.Опыт_работы}</h2>
                                      
                                    </div>
                                </a>
                                       )
                             
                           }
                                     }):
                              
                                     data.map((item,idx)=>{ 

                                          
                                          return(
                                                  // vacancy link
                                              <a href='/' key={item.id} className="flex mb-[16px] justify-around w-[1180px]  border h-[180px] items-center rounded-[15px]
                                              bg-[#F1F3FB]">
                                           
                                                 <div className=" flex gap-[22px]">
                                                 <div className="">
                                                    <img src={item.img} alt={item.img} className="w-[60px] h-[60px] rounded-[50%]"  />
                                  
                                                 </div>
                                                    <div className="item">
                                                    <h3 className="list">компания</h3>
                                                     <h2 className="info">{item.name}</h2>
                                                     <div className="">
                                                     <FiLock />                            kyrgyzstan
                                                         
                                                     </div>
                                                    </div>
                                                 </div>
                                                 <div className="item">
                                                     <h3 className="list">Должность</h3>
                                                     <h2 className="info">{item.Должность}</h2>
                                                     <div className="">
                                                     <FiLock />                            kyrgyzstan
                                                      
                                                     </div>
                                                 </div>
                                                 <div className="item">
                                                     <h3 className="list">оклад</h3>
                                                     <h2 className="info">{item.склад}</h2>
                                                     <div >
                                                     <FiLock />                            kyrgyzstan
                                                     </div>
                                                 </div>
                                                 <div className="item">
                                                     <h3 className="list">Опыт работы</h3>
                                                     <h2 className="info">{item.Опыт_работы}</h2>
                                                   
                                                 </div>
                                             </a>
                                                    )
                                          
                                                  })}
         {showInfo?      <div className="flex justify-center mt-[55px] mb-[200px] ">
               <Button className={`  `}>  <a href="/вакансия" className="rounded-[30px] bg-[#4A6DFF] 
               text-white ss:pl-[40px] ss:pr-[40px] ss:pt-[15px] ss:pb-[15px] p-3 relative">Посмотреть все вакансии 
          </a>
               <IoIosArrowForward className=" hidden ss:flex  right-[10px] top-[4px] absolute  text-white  text-[22px]" />
          </Button>
               </div>:
                 <div className="flex justify-center mt-[55px] mb-[200px] ">
                 <Button className={`  `}>  <a href="/" className="rounded-[30px] bg-[#4A6DFF] text-white pl-[40px] pr-[40px] pt-[15px] pb-[15px] border relative">go back
            </a>
                 <IoIosArrowForward className="  right-[10px] top-[4px] absolute  text-white  text-[22px]" />
            </Button>
                 </div>
               }


            </div>
        </div>
    </div>
  )
}

export default Vacancy