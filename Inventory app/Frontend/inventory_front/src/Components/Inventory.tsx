import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProductProps } from '../Interfaces/ProductProps'
import ProductSnippet from './ProductSnippet'
import axios from 'axios'

function Inventory() {

  const navigate = useNavigate()

  //Component variables
  const [products, setProducts] = useState<IProductProps[]>([])

  //Methods
  useEffect(()=>{
    axios.get<IProductProps[]>("http://localhost:8080/products/")
    .then((res) => {
      setProducts(res.data)
    })
    .catch((fail) =>{
      console.log(fail)
    })
  },[])

  return (
    <>
    <div>
        <h1>Inventory</h1>
        <button onClick={() => navigate("/register")}>Add product</button>
        <table>
          <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Description</td>
          <td>Price</td>
          <td>Stock</td>
        </tr>
        </thead>
        <tbody>
        {
          products.map((product) => {
            return <ProductSnippet{...product}
            key={product.productID}></ProductSnippet>
          })
          }
          </tbody>
        </table>
    </div>
    </>
  )
}

export default Inventory
