
import './App.css'
import { useState } from 'react'
import SignIn from './components/pages/signIn/SignIn'
import SignUp from './components/pages/signUp/SignUp'

import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Intro from './components/pages/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Cotegory from './components/pages/cotegory/Cotegory'
import Vacancy from './components/pages/vacancy/Vacancy'
import Employer from './components/pages/employer/Employer'
import Footer from './components/footer/Footer'
import CreateAcount from './components/pages/signUp/createAcaunt/CreateAcount'
import GetCode from './components/pages/signUp/getCode/GetCode'

function App() {
const [showPassword,setShowPassword]=useState(false)

  const [showInfo]=useState(true)
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
    {
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2tHB8_uTdg2feEEp2S8a1cijucIXuK-jyw&usqp=CAU`,
        name:"beka",
        id:3,
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
    }
    
]
const [showMenu,setShowMenu]=useState(false)
 

  return (
    <>
      <BrowserRouter >
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
      <Routes >
        <Route path='/' element={
          <>
          <Intro/>
          <Vacancy data={data} showInfo={showInfo} />
          <Cotegory />
          <Employer />
     
     
          </>
        }
        />
        <Route  path='/вакансия' element={<Vacancy data={data}/>}/>
        <Route  path='/signIn' element={<SignIn/>}/>
        <Route  path='/signUp' element={<SignUp/>}/>
        <Route  path='/createAcount' element={<CreateAcount showPassword={showPassword} setShowPassword={setShowPassword}/>}/>
        <Route  path='/getCode' element={<GetCode/>}/>


      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
