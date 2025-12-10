import { useState } from 'react'
import './App.css'
import { studentsList,initialProducts ,users} from './constants/data'
import Parent from './memo_callback_reamemo/Parent'
import Child from './memo_callback_reamemo/Child'
import { FilterList } from './filterlist/FilterList'
import { Timer } from './timer/Timer'




function App() {
const [student,setStudent]=useState(studentsList)
const [product,setProduct]=useState(initialProducts)
const [username,setUserame]=useState('');
const [userroll,setUserRoll]=useState('')
const [error,setError]=useState(false)
const [select,setSelect]=useState('')
const [count,setCout]=useState(0)
console.log('app render')

function handleChange(e){
  const newValue=e.target.value;
  // console.log( typeof newValue, newValue)
  setUserRoll(Number(newValue))
  setError(false)
  // console.log(e)
}

function updateName(){
  const findeRoll=student.some((item)=>item.rollNo ===userroll)
  if(!findeRoll){
    setError(true)
  }
  const updated=student.map((item)=>
    item.rollNo === userroll?{...item,name:username}:item
  )
  setStudent(updated)
  setUserame('')
  setUserRoll('')
}

function increseQty(id){
  const updated=product.map((item)=>
    item.id ===id?{...item,qty:item.qty+1}:item
  )
  setProduct(updated)

}



  return (
    <>
    <h1>React problem solutions</h1>
    <ul>
      {student.map((item,i)=>(
        <li key={i}>{item.rollNo}: {item.name}</li>
       
      ))}
    </ul>

    <input type='number' value={userroll} onChange={handleChange}/>
    {error && <span style={{color:'red'}}>enter valid roll number</span>}
        <input type='text'  value={username} onChange={(e)=>setUserame(e.target.value)}/>

    
      <button onClick={updateName}>Update  Name</button>
        {/* increse product quantitiy */}
        <h1>Quantitiy list</h1>

        <ul>
          {product.map((item)=>
          <li key={item.id}>{item.price}:{item.qty} <button onClick={()=>increseQty(item.id)}>+</button></li>
          
        )
      
          }
        </ul>

        {/* option list */}
        <select onChange={(e)=>setSelect(e.target.value)} value={select}>
          <option >User name</option>
          {users.map((item)=>
          <option key={item.id} value={item.id}>{item.name}</option>
          )}
        </select>

      <p>{select && <span>user selected {select}</span>}</p>
      <Parent/>
      <Child/>
      <button onClick={()=>setCout(count+1)}>increse</button>
      <p>{count}</p>
      <FilterList/>
      <Timer/>
      
    </>
  )
}

export default App


//component rerender pattern

// 🧠 Yes, React will re-run all child components in that tree…
// …but memoized components (React.memo) can SKIP their render if their props didn’t change.

// Let’s break it dow