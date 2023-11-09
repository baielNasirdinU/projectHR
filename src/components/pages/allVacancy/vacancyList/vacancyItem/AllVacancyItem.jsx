import React from "react";
import './allVacancyItem.css'
const VacancyItem = (props,{deleted}) => {
  return (
      <>
        <div className=" m-auto flex justify-center ">
        
          <div className="flex mb-[6px]  justify-around ss:w-[60%] h-[123px]   lg:w-[1180px]  border  items-center rounded-[15px] bg-[#F1F3FB]" >
            
                 
                  
                      
                        {/* <div className=" flex gap-[22px] p-4  flex-col ss:flex-row ">
                          <div className="">
                            <img
                              src={props.img}
                              alt={props.name}
                              className="w-[60px] h-[60px] rounded-[50%]"
                            />
                          </div>
                          <div className="item">
                            <h3 className="list">компания</h3>
                            <h2 className="info">{props.name}</h2>
                            <div className="">
                              <FiLock />
                               kyrgyzstan
                            </div>
                          </div>
                        </div> */}
                        <div className="contentAll flex flex-col ju">
                          <h3 className="list">позиция</h3>
                          <h2 className="info">{props.Должность}</h2>
                    
                        </div>
                      
                        <div className="contentAll  lg:flex flex-col  ">
                          <h3 className="list">Вид Занятости</h3>
                          <h2 className="info">{props.Вид_Занятости}</h2>
                       
                        </div>
                        <div className="contentAll  lg:flex flex-col">
                          <h3 className="list">оклад</h3>
                          <h2 className="info">{props.оклад}</h2>
                       
                        </div>
                        <div className="contentAll   lg:flex flex-col">
                          <h3 className="list">Опыт работы</h3>
                          <h2 className="info">{props.опыт_работы}</h2>
                        </div>
                        <div className="contentAll   lg:flex flex-col">
                          <h3 className="list">Отклики</h3>
                          <h2 className="info">{props.Отклики}</h2>
                        </div>
                        <div className="contentAll   lg:flex flex-col">
                          <h3 className="list">Создано</h3>
                          <h2 className="info">{props.Создано}</h2>
                        </div>
                        <div className="contentAll   lg:flex flex-col">
                          <h3 className="list">статус</h3>
                          {/* <h2 className="info">{props.статус.open}</h2> */}
                          <select name="" id="" onChange={props.deleted} className={`h-[40px] rounded-[30px]   bg-green-200 border-[#49C6A8] `}>
                            <option value={props.статус.open}>{props.статус.open}</option>
                            <option value={props.статус.close}>{props.статус.close}</option>
                            <option value={props.статус.archive}>{props.статус.archive}</option>
                            <option value={props.статус.remove} >{props.статус.remove}</option>
                            <option value={props.статус.Редактировать}>{props.статус.Редактировать}</option>
                          </select>
                        </div>
                  
        
             

            
              </div> 
            
          </div>
        </>
      
  );
};

export default VacancyItem;
