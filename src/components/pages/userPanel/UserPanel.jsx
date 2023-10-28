import React from "react";
import styles from "../../styles/style";
import Button from "../../buttons/Button";
import { NavLink } from "react-router-dom";

const UserPanel = () => {
  return <div>
    <div className={`${styles.container} mt-[31px]`}>
      <div className="userNav flex items-center gap-[36px] shadow-lg w-full h-[75px] rounded-[20px] border pl-[23px] ">
        <NavLink to="/" className="">Мои вакансии</NavLink>
        <NavLink to="/" className="">Кандидаты </NavLink>
      </div>
      <div className="flex justify-center items-center h-[80vh] flex-col gap-[40px]">
        <p>У вас нет никаких размещенных вакансий</p>
       <Button>
       <NavLink to="#" className="rounded-[30px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] border" onClick={()=>setShowMenu(false)}>Регистрация
          </NavLink>
       </Button>
      </div>
    </div>
  </div>;
};

export default UserPanel;
