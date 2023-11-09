import React from 'react'
import FilterVacancy from './filterVacancy/FilterVacancy'
import { AllVacancyList } from './vacancyList/AllVacancyList'
import styles from '../../styles/style'
const allVacancy = ({data ,onDelete,updateTerm}) => {
  return (
    <div className={`${styles.container}`}>
      <FilterVacancy updateTerm={updateTerm} />
      <AllVacancyList data={data} onDelete={onDelete}/>
    </div>
  )
}

export default allVacancy