import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductRegister() {

    const navigate = useNavigate()

  return (
    <>
    <div>
        <h1>Register new product</h1>
        <button onClick={() => navigate("/")}>Back</button>
    </div>
    </>
  )
}

export default ProductRegister