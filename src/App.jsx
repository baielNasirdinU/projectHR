
import './App.css'

import { BrowserRouter, Routes,Route} from 'react-router-dom'
//,Routes,Route 
import Intro from './components/pages/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Cotegory from './components/pages/cotegory/Cotegory'
import Vacancy from './components/pages/vacancy/Vacancy'
import Employer from './components/pages/employer/Employer'
import Footer from './components/footer/Footer'

function App() {
  // const [showInfo]=useState(false)
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
    }
    
]
 

  return (
    <>
      <BrowserRouter >
      <Navbar/>
      <Routes className="">
        <Route path='/' element={
          <>
          <Intro/>
          <Vacancy data={data} />
          <Cotegory />
          <Employer />
          <Footer />
          </>
        }
        />
        <Route  path='/вакансия' element={<Vacancy data={data}/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
