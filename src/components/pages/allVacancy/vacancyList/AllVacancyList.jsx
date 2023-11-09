// import React from 'react'
import AllVacancyItem from './vacancyItem/AllVacancyItem'
// import './vacancyList.css'

export const AllVacancyList = ({data,onDelete}) => {

    // let lastThree = data.slice(-3);
    return (
    <div>
         
          {
            data.map((data)=>
            <div key={data.id}>
                
            <AllVacancyItem  {...data} deleted={()=>onDelete(data.id)} />
            </div>
            )
          }
    
    </div>
  )
}
