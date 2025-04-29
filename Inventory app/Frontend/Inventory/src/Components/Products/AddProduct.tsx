import { ArrowBack} from "@mui/icons-material"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IProduct } from "../../Interfaces/IProduct"

/* eslint-disable react/react-in-jsx-scope */
function AddProduct() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState("")


    const changeName = (e: ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }

    const changeDescription = (e:ChangeEvent<HTMLInputElement>) =>{
        setDescription(e.target.value)
    }

    const changePrice = (e: ChangeEvent<HTMLInputElement>) =>{
        const n = Number(e.target.value)

        if(n<0){
            setPrice('0')
            return
        }

        setPrice(String(n))
    }

    const changeStock = (e: ChangeEvent<HTMLInputElement>) =>{
        let n = Number(e.target.value)
        n = Math.trunc(n)
        if(n<0){
            setStock('0')
            return
        }
        setStock(String(n))
    }

    const handleClose = () => {
        setOpen(false);
      };

    async function RegisterProduct() {

        const newProduct : IProduct={
            name : name,
            description:description,
            price: Number(price),
            stock: Number(stock)
        }

        try{
            const response = await axios.post("http://localhost:8080/products/", newProduct)
            console.log(response)
            ClearValues()
            setOpen(true)
            setDialogContent("The product was registered succesfuly.")
        }catch(fail){
            setDialogContent("Something went wrong :(")
            setOpen(true)
            console.log(fail)
        }
    }

    function ClearValues()
    {
        setName('')
        setPrice('')
        setStock('')
        setDescription('')
    }

  return (
    <>
    <h1>Register new product</h1>
    <Button onClick={()=>navigate("/")} variant="outlined" startIcon={<ArrowBack/>}>Return</Button>
    <br/>
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
    >
        <div>
            <TextField required label="Name" variant="outlined" onChange={changeName} value={name}/>
            <br/>
            <TextField required label="Price" variant="outlined" type="number" onChange={changePrice} value={price}/>
            <br/>
            <TextField required label="Stock" variant="outlined" type="number" onChange={changeStock} value={stock}/>
            <br/>
            <TextField label="Description" variant="outlined"  onChange={changeDescription} value={description}/>
            <br/>
            <Button onClick={RegisterProduct} variant="contained">Register</Button>
        </div>
    </Box>
    <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddProduct