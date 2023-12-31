import React from "react";
import styles from "../../styles/style";
import { useNavigate } from "react-router-dom";
import "./signIn.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver}from '@hookform/resolvers/yup'


const schema = yup.object().shape({
  email:yup.string().email().required(),
  password:yup.string().min(4).max(20).required()
 })


const SignIn = ({ showPassword, setShowPassword }) => {


  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  });
const navigate=useNavigate()

  const onSubmit = (data) => {

   
    console.log(data);
    navigate('/userPanel')
  
  };

  return (
    <div className="bg-[#EAEEFF]  pb-[20px] lg:h-screen">
      <div
        className={`${styles.container} flex  justify-center  pt-[54px]   border `}
      >
        <div className=" signIn  ">
          <h2>Войти</h2>
          <p className="info mb-[60px]">
            С возвращением! Пожалуйста, введите свои данные
          </p>

          <form action="" 
           onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[16px]  mb-[20px]">
            <label>
              <input
                type="email"
                placeholder="Электронная почта"
                className="w-full outline-none  pl-[25px] p-4 rounded-[6px]  border"
              {...register("email")}/>
            </label>
            {showPassword ? (
              <label className="relative mb-[20px]">
                <input
                  type="text"
                  placeholder="Введите пароль"
                  className="w-full outline-none  pl-[25px] p-4 rounded-[6px]  border" {...register("password")}
                />
                <a
                  href="/fogetCode"
                  className="absolute bottom-[-22px] left-[60%] w-full text-[#B6B6B6]"
                >
                  Забыли пароль ?
                </a>
                {showPassword ? (
                  <button>
                    <FaEye
                      className="absolute top-5 right-[23px] text-[20px]  "
                      onClick={() => setShowPassword(false)}
                    />
                  </button>
                ) : (
                  <button>
                    <FaEyeSlash
                      onClick={() => setShowPassword(true)}
                      className="absolute top-5 right-[23px] text-[20px]
               text-[#AAAAAA]  "
                    />
                  </button>
                )}
              </label>
            ) : (
              <label className="relative mb-[20px]">
                <input
                  type="password"
                  placeholder="Введите пароль"
                  className="w-full outline-none  pl-[25px] p-4 rounded-[6px]  border" {...register("password")}
                />
                {showPassword ? (
                  <button>
                    <FaEye
                      className="absolute top-5 right-[23px] text-[20px]  "
                      onClick={() => setShowPassword(false)}
                    />
                  </button>
                ) : (
                  <button>
                    <FaEyeSlash
                      onClick={() => setShowPassword(true)}
                      className="absolute top-5 right-[23px] text-[20px]
                   text-[#AAAAAA]  "
                    />
                  </button>
                )}
                <a
                  href="/fogetCode"
                  className="absolute bottom-[-22px] left-[60%] w-full text-[#B6B6B6]"
                >
                  Забыли пароль ?
                </a>
              </label>
            )}

            <button type="submit"  className="rounded-[30px] mt-[60px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]" >
          
        
                  Войти
            </button>
          </form>

          <p className=" flex justify-center gap-2 text-[#A9ABB4]  ">
            У вас уже есть аккаунт?{" "}
            <a href="/" className="text-black">
              Войти
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
