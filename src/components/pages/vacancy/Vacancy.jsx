import React from 'react'

import { VacancyList } from './vacancyList/VacancyList';
import './vacancy.css'
import styles from '../../styles/style';
const Vacancy = ({data}) => {

 
    
  return (
    <div className={`vacancy ${styles.container}`}>
       <h2 className="title mb-[23px]">Последние вакансии</h2>
          <p className="info mb-[55px]">
            Найдите работу, которая соответствует вашим требованиям
          </p>
        <VacancyList  data={data}/>
    </div>
  )
}

export default Vacancy