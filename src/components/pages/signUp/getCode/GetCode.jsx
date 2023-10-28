import React from "react";
import "./getCode.css";
import { NavLink } from "react-router-dom";
import Button from "../../../buttons/Button";
import styles from "../../../styles/style";

const GetCode = () => {
  return (
    <div className="bg-[#EAEEFF] lg:h-screen">
      <div className={`${styles.container} flex  justify-center  pt-[94px]   `}>
        <div className="getCode  ">
          <h2>Код подтверждения </h2>
          <p className="info">Код отправлен на почту email.........</p>

          <form action="" className="flex gap-[10px] mb-[40px]">
            <label htmlFor="" className="">
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]"
              />
            </label>
            <label htmlFor="" className="">
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]"
              />
            </label>
            <label htmlFor="" className="">
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]"
              />
            </label>
            <label htmlFor="" className="">
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]"
              />
            </label>
            <label htmlFor="" className="">
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]"
              />
            </label>
            <label htmlFor="" className="">
              <input
                type="text"
                placeholder="0"
                className="w-[60px] h-[60px] text-center rounded-[6px]"
              />
            </label>
          </form>
          <button type="submit" className="w-full ">
            {" "}
            <NavLink
              to="/userPanel"
              className="rounded-[30px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[15px] pb-[15px] block h  text-[20px]  w-full border font-[2000]"
            >
              Создать аккаунт
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetCode;
