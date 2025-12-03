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
const [userroll,setUserRoll]=useState()

function handleChange(e){
  const newValue=e.target.value;
  // console.log( typeof newValue, newValue)
  setUserRoll(Number(newValue))
  // console.log(e)
}

function updateName(){
  const updated=student.map((item)=>
    item.rollNo === userroll?{...item,name:username}:item
  )
  setStudent(updated)
}

  return (
    <>
    <h1>React problem solutions</h1>
    <ul>
      {student.map((item,i)=>(
        <li key={i}>{item.rollNo}: {item.name}</li>
       
      ))}
    </ul>

    <input type='number' onChange={handleChange}/>
        <input type='text' onChange={(e)=>setUserame(e.target.value)}/>

    
      <button onClick={updateName}>Update  Name</button>
      
    </>
  )
}

export default App
