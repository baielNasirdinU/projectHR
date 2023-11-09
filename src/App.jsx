import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CreateAcount from "./components/pages/signUp/createAcaunt/CreateAcount";
import GetCode from "./components/pages/signUp/getCode/GetCode";
import FogetCode from "./components/pages/signIn/fogotCode/FogetCode";
import CreateCode from "./components/pages/signIn/createCode/CreateCode";
import CreateVacancy from "./components/pages/userPanel/createVacancy/CreateVacancy";

import {Cotegory,Employer,Intro,SignIn,SignUp,UserPanel,Vacancy,AllVacancy}from './components/pages'

// import NewVacancy from "./components/pages/userPanel/createVacancy/newVacancy/NewVacancy";

function App() {
  
  

  const [data,setData]= useState([
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
      name: "beka",

      id: uuidv4(),
      Должность: "jkkj",
      оклад: "jkkj",
      Отклики:2,
      Вид_Занятости:'Полная занятость',
      опыт_работы:'От 1 года до 3 лет',
      Отклики:2,
      Создано:'2 дня назад',
      статус:{
        open:'Открыто',
        close:'Закрыто',
        archive:'Архив',
        remove:'Удалить',
        Редактировать:'Редактировать'
      }
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
      name: "beka",

      id: uuidv4(),
      Должность: "jkkj",
      оклад: "jkkj",
      Опыт_работы: "kk",
      Вид_Занятости:'Полная занятость',
      опыт_работы:'От 1 года до 3 лет',
      Отклики:2,
      Создано:'2 дня назад',
      статус:{
        open:'Открыто',
        close:'Закрыто',
        archive:'Архив',
        remove:'Удалить',
        Редактировать:'Редактировать'
      }
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
      name: "beka",

      id: uuidv4(),
      Должность: "jkkj",
      оклад: "jkkj",
      Опыт_работы: "kk",
      Вид_Занятости:'Полная занятость',
      опыт_работы:'От 1 года до 3 лет',
      Отклики:2,
      Создано:'2 дня назад',
      статус:{
        open:'Открыто',
        close:'Закрыто',
        archive:'Архив',
        remove:'Удалить',
        Редактировать:'Редактировать'
      }
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
      name: "beka",

      id: uuidv4(),
      Должность: "jkkj",
      оклад: "jkkj",
      Опыт_работы: "kk",
      Вид_Занятости:'Полная занятость',
      опыт_работы:'От 1 года до 3 лет',
      Отклики:2,
      Создано:'2 дня назад',
      статус:{
        open:'Открыто',
        close:'Закрыто',
        archive:'Архив',
        remove:'Удалить',
        Редактировать:'Редактировать'
      }
    },
    
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
      name: "beka",

      id: uuidv4(),
      Должность: "jkkj",
    оклад: "jkkj",
      Опыт_работы: "kk",
      Вид_Занятости:'Полная занятость',
      опыт_работы:'От 1 года до 3 лет',
      Отклики:2,
      Создано:'2 дня назад',
      статус:{
        open:'Открыто',
        close:'Закрыто',
        archive:'Архив',
        remove:'Удалить',
        Редактировать:'Редактировать'
      }
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
      name: "beka",

      id: uuidv4(),
      Должность: "jkkj",
      оклад: "jkkj",
      Опыт_работы: "kk",
      Вид_Занятости:'Полная занятость',
      опыт_работы:'От 1 года до 3 лет',
      Отклики:2,
      Создано:'2 дня назад',
      статус:{
        open:'Открыто',
        close:'Закрыто',
        archive:'Архив',
        remove:'Удалить',
        Редактировать:'Редактировать'
      }
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
      name: "beka",

      id: uuidv4(),
      Должность: "jkkj",
      оклад: "jkkj",
      Опыт_работы: "kk",
      Вид_Занятости:'Полная занятость',
      опыт_работы:'От 1 года до 3 лет',
      Отклики:2,
      Создано:'2 дня назад',
      статус:{
        open:'Открыто',
        close:'Закрыто',
        archive:'Архив',
        remove:'Удалить',
        Редактировать:'Редактировать'
      }
    },
  
  ])
  const [term,setTerm]=useState('')
  const searchHanlder=(arr,term)=>{
    if (term.length==0) {
      return(
        arr
      )
      
    }
    return(
      arr.filter(item=>item.name.toLowerCase().indexOf(term) >-1)
    )

  }
  const onDelete=(id)=>{
    console.log(id);

    const updateData=
    data.filter(item=>item.id!==id)
    setData(updateData)
//  setData((prevData) => ({
//     data: prevData.filter((item) => item.id !== id),
//   }));


  }
  const updateTerm=(term)=>{
    setTerm({term})
  }
  const [showPassword, setShowPassword] = useState(false);

 
  setTimeout(() => {
    setShowPassword(false)

    
  }, 5000);
  const [showInfo] = useState(true);

  const [showMenu, setShowMenu] = useState(false);
  const [newUser,setNewUser]=useState({})
const visibleData=searchHanlder(data,term)
  return (
    <>
      <BrowserRouter>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Vacancy  data={data} />
                <Cotegory />
                <Employer />
              </>
            }
          />
          <Route path="/вакансия" element={<Vacancy data={data} />} />
          <Route
            path="/signIn"
            element={
              <SignIn
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            }
          />
          <Route path="/signUp" element={<SignUp  setNewUser={setNewUser}/>} />
          <Route
            path="/createAcount"
            element={
              <CreateAcount
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                newUser={newUser}
                setNewUser={setNewUser}
              />
            }
          />
          <Route path="/getCode" element={<GetCode />} />
          <Route path="/fogetCode" element={<FogetCode />} />
          <Route
            path="/createCode"
            element={
              <CreateCode
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            }
          />
          <Route path="/userPanel" element={<UserPanel />} />
          <Route path="/createVacancy" element={<CreateVacancy  />} />
          <Route path="/allVacancy" element={<AllVacancy data={visibleData} updateTerm={updateTerm} onDelete={onDelete} />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
