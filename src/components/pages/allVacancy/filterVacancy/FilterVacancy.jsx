import React, { useState } from 'react'

const FilterVacancy = ({updateTerm}) => {
    const [term,setTerm]=useState('')
    // console.log(name);
    const updateTermInput=(e)=>{

        const term =e.target.value
        setTerm(term)
        updateTerm(term)
        
    }
  return (
    <form>
        <label >
            <input type="text"  value={term}  onChange={updateTermInput}/>
        </label>
        <label >
            <select name="" id="">
                <option value="vas">e</option>
                <option value="vas">e</option>
                <option value="vas">e</option>
            </select>
        </label>
        <label >
            <select name="" id="">
                <option value="vas">e</option>
                <option value="vas">e</option>
                <option value="vas">e</option>
            </select>
        </label>
        <label >
            <select name="" id="">
                <option value="vas">e</option>
                <option value="vas">e</option>
                <option value="vas">e</option>
            </select>
        </label>
    </form>
    
  )
}

export default FilterVacancy