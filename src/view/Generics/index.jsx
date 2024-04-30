import React from 'react'
import { useLocation } from 'react-router-dom'
import  Container  from './styel'

export default function Generics() {
    const location =useLocation()
  return (
    <Container>
    <h2>{location.pathname}</h2>
    <h1>Cominr soon....</h1>
    </Container>
  )
}

