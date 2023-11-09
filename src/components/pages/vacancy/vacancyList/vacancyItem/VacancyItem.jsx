import React from "react";
import './vacancyItem.css'
import {FiLock}from 'react-icons/fi'
const VacancyItem = (props) => {
  return (
      <>
        <div className=" m-auto flex justify-center">
        
          <div className="flex mb-[16px]  justify-around ss:w-[60%]  lg:w-[1180px]  border  items-center rounded-[15px] bg-[#F1F3FB]" >
            
                 
                  
                      
                        <div className=" flex gap-[22px] p-4  flex-col ss:flex-row ">
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
                        </div>
                        <div className="item  lg:flex flex-col">
                          <h3 className="list">Должность</h3>
                          <h2 className="info">{props.Должность}</h2>
                          <div className="">
                            <FiLock />
                             kyrgyzstan
                          </div>
                        </div>
                        <div className="item  lg:flex flex-col">
                          <h3 className="list">оклад</h3>
                          <h2 className="info">{props.оклад}</h2>
                          <div>
                            <FiLock /> 
                            kyrgyzstan
                          </div>
                        </div>
                        <div className="item  hidden lg:flex flex-col">
                          <h3 className="list">Опыт работы</h3>
                          <h2 className="info">{props.опыт_работы}</h2>
                        </div>
                  
        
             

            
              </div> 
            
          </div>
        </>
      
  );
};

export default VacancyItem;
