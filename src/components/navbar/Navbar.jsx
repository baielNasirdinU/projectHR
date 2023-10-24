import style from "../styles/style"
import logo from '../img/logo.png'
import { v4 as uuidv4 } from 'uuid';
import Button from "../buttons/Button"
import './navbar.css'

const Navbar = () => {
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
      
    
  return (
    <div className="header sticky top-0 z-20">
          <div className={`${style.container}  flex justify-between h-[100px] items-center`}>
      <div className=" flex gap-[60px] items-center">
      <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className="flex gap-[10px]">
            {items.map(item=>{
                return(
                    <li key={item.id}  className="">
                        <a href={item.href} className="mr-[69px] list ">
                            {item.name}
                        </a>
                    </li>
                )
            }
                
            )}
     
        </ul>
      </div>
        <div className={`flex gap-[20px]`}>
<Button></Button>
<Button className={`bg-cyan-400  `}>ii</Button>
        </div>
    </div>
    </div>
  )
}

export default Navbar