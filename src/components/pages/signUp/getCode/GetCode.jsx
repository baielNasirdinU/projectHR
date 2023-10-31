import React from "react";
import "./getCode.css";
import { useNavigate} from "react-router-dom";

import styles from "../../../styles/style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver}from '@hookform/resolvers/yup'



const GetCode = () => { 
  const schema = yup.object().shape({
    numberOne:yup.number().positive().integer().min(1).max(1).required('enter your number '),
    numberTwo:yup.number().required(),
    numberThree:yup.number().required(),
    numberFour:yup.number().required(),
    numberFive:yup.number().required(),
    numberSix:yup.number().required(),
    
   })

  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  });
const navigate=useNavigate()

  const onSubmit = (data) => {

   
    console.log(data);
    navigate('/userPanel')
  
  };

  return (
    <div className="bg-[#EAEEFF] lg:h-screen">
      <div className={`${styles.container} flex  justify-center  pt-[94px]   `}>
        <div className="getCode  ">
          <h2>Код подтверждения </h2>
          <p className="info">Код отправлен на почту email.........</p>

          <form action="" onSubmit={handleSubmit(onSubmit)} className=" ">
            <label htmlFor="" className="flex gap-[10px]">
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]" {...register("numberOne")}
              />
         
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]" {...register("numberTwo")}
              />
          
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]" {...register("numberThree")} 
              />
      
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]" {...register("numberFour")} 
              />
     
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]" {...register("numberFive")} 
              />
      
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]" {...register("numberSix")}  
              />
            </label>
          <button type="submit" className="rounded-[30px] mt-[40px]
          bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]">
        
              Создать аккаунт
        
          </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default GetCode;
