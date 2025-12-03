import { useState } from 'react'
import './App.css'
import { ButtonGroupButtonContext } from '@mui/material';


const studentsList = [
  { rollNo: 1111, name: "name1" },
  { rollNo: 2222, name: "name2" },
  {rollNo:3333,name:"suresh"},
  {rollNo:4444, name:"stalin"},
  {rollNo:55555,name:"sumit"}
];
function App() {
const [student,setStudent]=useState(studentsList)
const [username,setUserame]=useState('');
const [userroll,setUserRoll]=useState('')
const [error,setError]=useState(false)

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
      
    </>
  )
}

export default App
