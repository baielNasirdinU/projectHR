import React from 'react'
import VacancyItem from './vacancyItem/VacancyItem'
import './vacancyList.css'

export const VacancyList = ({data}) => {
    let lastThree = data.slice(-3);
    return (
    <div>
         
          {
            lastThree.map((data)=>
            <a href="/" key={data.id}>
                
            <VacancyItem  {...data} />
            </a>
            )
          }
    
    </div>
  )
}
