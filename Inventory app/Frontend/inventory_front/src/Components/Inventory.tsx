import React from 'react'
import { useNavigate } from 'react-router-dom'

function Inventory() {

  const navigate = useNavigate()

  return (
    <>
    <div>
        <h1>Inventory</h1>
        <button onClick={() => navigate("/register")}>New product</button>
    </div>
    </>
  )
}

export default Inventory
