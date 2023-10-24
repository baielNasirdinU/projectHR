
import styles from "../../styles/style"
// import {FaLocationDot} from 'react-icons/fa'
import {FiLock}from 'react-icons/fi'
import'./vacancy.css'

const Vacancy = () => {
const data =[
    {
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
        name:"beka",
        
        id:1,
        Должность:"jkkj",
        склад:"jkkj",
        Опыт_работы:"kk"
    },
    {
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
        name:"beka",
        id:2,
        Должность:"jkkj",
        склад:"jkkj",
        Опыт_работы:"kk"
    },
    {
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
        name:"beka",
        id:3,
        Должность:"jkkj",
        склад:"jkkj",
        Опыт_работы:"kk"
    },
    
]

  return (
    <div className={`${styles.container}  h-screen `}>
        <div className="w-[1180px] m-auto vacancy">
            <h2 className="title mb-[23px]">Последние вакансии</h2>
            <p className="info mb-[55px]">Найдите работу, которая соответствует вашим требованиям</p>
            <div className="data flex flex-col ">
                {
                    data.map((item)=>(

                <div key={item.id} className="flex mb-[16px] justify-around w-[1180px]  border h-[180px] items-center rounded-[15px]
                 bg-[#E7E7E7]">
              
                    <div className=" flex gap-[22px]">
                    <div className="">
                       <img src={item.img} alt={item.img} className="w-[80px] h-[80px] rounded-[50%]"  />

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
                </div>
                    ))
                }


                {/* {
                    data.map((item)=>(
                        <div className="" key={item.id}>
                            <img src="/" alt="photo company" />
                            <div className="">
                                компания{item.name}</div>
                            <div className="">

                            </div>
                            <div className="">fdg</div>
                            <div className="">dfg</div>
                        </div>

                    ))
                    
                } */}
            </div>
        </div>
    </div>
  )
}

export default Vacancy