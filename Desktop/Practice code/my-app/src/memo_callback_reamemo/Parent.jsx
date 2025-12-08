import React, {  useState } from 'react'
import { useMemo } from 'react'


const Parent = (props) => {
    const [val,setVal]=useState(0)
        console.log('Parent reredner')

        const total=useMemo(()=>{
            let total=0;
            for(let i=0; i<3000;i++){
                total+=i
            }
            console.log('recalculaitn')
            return total
        },[val])

  return (
    <div>Parent

        <p> hi this is{props.name}{props.surnmae}</p>
        <button onClick={props.onClick}>hanldilcick</button>
        <button onClick={()=>setVal(val+1)}>INcrse</button>
        <p>{total}</p>
    </div>
  )
}

export default React.memo(Parent);
