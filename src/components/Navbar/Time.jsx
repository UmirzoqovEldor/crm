import React, { useEffect, useState } from 'react'
import { NavbarSection, Timer } from './style'

export  function Time() {
const [data,setData]=useState({hour:"",minute:"",status:""})

const getSecond=()=>{
    setInterval(()=>{
   const date = new Date()
  
   let hour=date.getHours()
   let minute =date.getMinutes()
   if (hour>12) {
    hour=hour%12
    setData({...data,status:"PM"})
   }else{
    setData({...data,status:"AM"})
   }
   if (hour<10) hour ="0"+hour;
   if (minute<10) minute ="0"+minute;

   setData({...data,hour,minute})
    },1000)
    
}
useEffect(()=>{
  getSecond()
  
    
},[])
  return (
    <NavbarSection>
        <Timer>{data.hour}:{data.minute}</Timer>
        <Timer status="true">{data.status}</Timer>
    </NavbarSection>
  )
}
export default Time
