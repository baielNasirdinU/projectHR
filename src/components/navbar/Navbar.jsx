import style from "../styles/style"
import logo from '../img/logo.png'
import { v4 as uuidv4 } from 'uuid';
import Button from "../buttons/Button"
import{CiMenuBurger}from'react-icons/ci'
import './navbar.css'
import {BiXCircle}from 'react-icons/bi'
import { NavLink } from "react-router-dom";

const Navbar = ({showMenu,setShowMenu}) => {
  window.addEventListener('keydown',(e)=>{
    // console.log(e);
    if (e.key=="Escape") {
      setShowMenu(false)
      
    }


  })
  const items=[
        {
          name:"Вакансии",
          id:uuidv4(),
          href:'/вакансия'
        },
        {
          name:"FAQ",
          id:uuidv4(),
          href:'/FAQ'
        },
        {
          name:"Контакты",
          id:uuidv4(),
          href:'контакты'
        }
      ]
      // console.log(showMenu,setShowMenu);
    
  return (
    <div className="header sticky top-0 z-20  border-b-1   border-indigo-600 shadow-lg">
          <div className={`${style.container}  flex justify-between h-[100px] items-center`}>
      <div className=" flex gap-[60px] items-center">
      <div className="logo">
         <NavLink to="/">
         <img src={logo} alt="logo" />
         </NavLink>
        </div>
        <ul className="hidden md:flex gap-[10px]">
            {items.map(item=>{
                return(
                    <li key={item.id}  className="">
                        <NavLink to={item.href} className="mr-[69px] list  ">
                            {item.name}
                        </NavLink>
                    </li>
                )
            }
                
            )}
     
        </ul>
        {/* //showMenu */}
     {showMenu?

          <ul className="absolute md:hidden duration-500 transition-all
         bg-black w-[50%] h-screen z-10  right-0 top-[100px] active ">
            {items.map(item=>{
                return(
                    <li key={item.id}  
                    className=" border-b-2 text-center  hover:bg-red-700 transition-all duration-500">
                        <NavLink to={item.href} onClick={()=>setShowMenu(false)} className=" listMenu block   p-4 ">
                            {item.name}
                        </NavLink>
                    </li>
                )
            }
                
            )}
            <li className="mt-8">
            <div className={`flex justify-center ss:hidden ss:gap-[20px] gap-[40px] flex-wrap `}>
<Button>    <NavLink to="/signIn" className="rounded-[30px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border">Войти
          </NavLink></Button>
<Button className={`bg-cyan-400  `}>    <NavLink to="/signUp" className="rounded-[30px] bg-[#4A6DFF] text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] border">Регистрация
          </NavLink></Button>
        </div>
            </li>
            
     
        </ul>
      :
               <ul className="absolute md:hidden 
               bg-black w-[50%] h-screen   
               top-[-1000px] right-0 active ">
                  {items.map(item=>{
                      return(
                          <li key={item.id}  
                          className=" border text-center  hover:bg-red-700 transition-all duration-500">
                              <NavLink to={item.href} onClick={()=>setShowMenu(false)} className=" listMenu block   p-4 ">
                                  {item.name}
                              </NavLink>
                          </li>
                      )
                  }
                      
                  )}
           
              </ul>
        }
      </div>
        <div className={`hidden ss:flex gap-[20px]`}>
<Button>    <NavLink to="/signIn" className="rounded-[30px] pl-[40px] pr-[40px] pt-[15px] pb-[15px] border">Войти
          </NavLink></Button>
<Button className={`bg-cyan-400  `}>    <NavLink to="/signUp" className="rounded-[30px] bg-[#4A6DFF] text-white pl-[40px] pr-[40px] pt-[15px] pb-[15px] border">Регистрация
          </NavLink></Button>
        </div>
        <div className="burger md:hidden">
          {
            showMenu?
            <button onClick={()=>setShowMenu(false)}><BiXCircle  className=" p-[2px] hover:scale-[1.2] duration-500 transition-all  text-[32px]  rounded"  /></button>:
            <button onClick={()=>setShowMenu(true)}><CiMenuBurger className=" p-[2px]  text-[32px]  rounded hover:scale-[1.2] duration-500 transition-all "/></button>
          }
        
        </div>
   
    </div>
    </div>
  )
}

export default Navbar