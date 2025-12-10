import React, { useState } from 'react'
import { useEffect } from 'react'


export const Timer = () => {
    const [sec,setSec]=useState(0)
    const [running,setRunning]=useState(false)

    useEffect(()=>{
        let interval;
        if(running){
            interval=setInterval(()=>{
                setSec((sec)=>sec+1)
            },1000)
        }
        return()=>{if(interval)clearInterval(interval)}
    },[running])
  return (
    <div>Timer
        <button onClick={()=>setRunning(true)}>start</button>
        <button onClick={()=>setRunning(false)}>stop</button>
        <button onClick={()=>{setRunning(false);setSec(0);}}>reset</button>
        <p>{sec}</p>


    </div>
  )
}
