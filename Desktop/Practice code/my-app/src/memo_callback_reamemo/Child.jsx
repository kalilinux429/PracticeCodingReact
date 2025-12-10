import React, { useState } from 'react'
import Parent from './Parent'
import { useCallback } from 'react';
import Modal from '../modal_portal/Modal';

const Child = () => {
    const [show,setShow]=useState(false)
     const handleClick = useCallback(() => {
    console.log("button clicked");
  }, []);
  return (
    <>
     <div>Child</div>
    <Parent    onlclick={handleClick} name='mahesh' surnmae='kolhe'/>

    <button onClick={()=>setShow((prev)=>!prev)}>Open model</button>
    {show && <Modal>
        <h1>this is modal</h1>
        </Modal>}
    </>
   
  )
}

export default Child