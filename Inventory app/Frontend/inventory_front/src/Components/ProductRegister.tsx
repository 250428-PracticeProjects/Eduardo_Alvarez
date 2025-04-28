import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IProductProps } from '../Interfaces/ProductProps'
import axios from 'axios'

function ProductRegister() {

    const navigate = useNavigate()

    //Component variables
    const [name, setName] = useState("")
    const [description, setDescroption] = useState("")
    const [price, setPrice] = useState(1)
    const [stock, setStock] = useState(0)


    async function RegisterProduct(){
        let newProduct : IProductProps={
            productName : name,
            description:description,
            price:price,
            stock:stock
        }

        axios.post<IProductProps>('http://localhost:8080/products/', newProduct)
        .then((res) =>{
            console.log(res.data)
        })
        .catch((fail)=>{
            console.log(fail)
        })
    }

    //Methods
    let changeName = (e: ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }

    let changeDescription = (e: ChangeEvent<HTMLInputElement>) =>{
        setDescroption(e.target.value)
    }
    let changePrice = (e: ChangeEvent<HTMLInputElement>) =>{
        let n = Number(e.target.value)

        if(n<0){
            setPrice(0)
            return;
        }

        setPrice(n)
    }
    let changeStock = (e: ChangeEvent<HTMLInputElement>) =>{
        let n = Number(e.target.value)

        if(n<0){
            setStock(0)
            return;
        }
        n = Math.trunc(n)
        setStock(n)
    }
  return (
    <>
    <div>
        <h1>Register new product</h1>
        <button onClick={() => navigate("/")}>Back</button>
        <br/>
        <br/>
        <label>Product name <input type='text' value={name} onChange={changeName}></input></label>
        <br/>
        <br/>
        <label>Description <input type='text' value={description} onChange={changeDescription}></input></label>
        <br/>
        <br/>
        <label>Price <input type='number' value={price} onChange={changePrice}></input></label>
        <br/>
        <br/>
        <label>Stock <input type='number' value={stock} onChange={changeStock}></input></label>
        <br/>
        <br/>
        <button onClick={()=>RegisterProduct()}>Register</button>
    </div>
    </>
  )
}

export default ProductRegister