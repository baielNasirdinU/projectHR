
import './App.css'

import { BrowserRouter, Routes,Route} from 'react-router-dom'
//,Routes,Route 
import Intro from './components/pages/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Vacancy from './components/pages/vacancy/Vacancy'

function App() {
 

  return (
    <>
      <BrowserRouter >
      <Navbar/>
      <Routes className="">
        <Route path='/' element={
          <><Intro/>
          <Vacancy/></>
        }
        />
        <Route  path='/вакансия' element={<Vacancy/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
