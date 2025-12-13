import React from 'react'
import { useEffect,useState } from 'react'
import Loader from '../constants/Loader'
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))


export const Fetchapi = () => {
    const [data,setData]=useState([])
     const [loding,setLoaidng]=useState(false)
    const fetchApi=async()=>{
        setLoaidng(true)
        try{
            await delay(2000)
            const res= await fetch('https://jsonplaceholder.typicode.com/posts')
            const resData=await res.json();
            setData(resData)
            console.log(data)
            setLoaidng(false)
        }
        catch(err){
            console.log(err)
            setLoaidng(false)

        }
    }


    useEffect(()=>{
        fetchApi();
         console.log(data)
    },[])
    if(loding) return <Loader/>
  return (
    <div>
<ul>
    {data.map((item)=>
    <li key={item.id}>{item.title}{item.body}</li>
    )}
</ul>

    </div>
  )
}
