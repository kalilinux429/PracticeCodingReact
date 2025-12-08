import React from 'react'
import Parent from './Parent'
import { useCallback } from 'react';

const Child = () => {
     const handleClick = useCallback(() => {
    console.log("button clicked");
  }, []);
  return (
    <>
     <div>Child</div>
    <Parent    onlclick={handleClick} name='mahesh' surnmae='kolhe'/>
    </>
   
  )
}

export default Child