import React from 'react'
import { useState } from 'react'


const fruit=['mango','banang','piniapall','orange','grapes']
export const FilterList = () => {
    const [input,seInput]=useState('')
    const filterList=fruit.filter((item)=>item.toLowerCase().includes(input.toLowerCase()))
  return (
    <div>FilterList
        <input type='text' value={input} onChange={(e)=>seInput(e.target.value)}/>
        <ul>
            { input && filterList.map((item,i)=>
            <li key={i}>{item}</li>
            )}


        </ul>
    </div>
  )
}
