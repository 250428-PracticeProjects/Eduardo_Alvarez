import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { IProduct } from '../../Interfaces/IProduct';
import InventoryRow from './InventoryRow';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';



export default function InventoryTable() {
const [products, setProducts] = React.useState<IProduct[]>([])
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("")

  const handleClose = () => {
    setOpen(false);
  };

  function OpenDialog(productId: number, productName: string){
    setDialogContent(`Are you sure want to delete ${productName}?`)
    setOpen(true)
  }
    
    async function LoadProducts() {
        try{
            const response = await axios.get("http://localhost:8080/products/")
            setProducts(response.data)
        }catch(fail){
            console.log(fail)
        }
    }

    React.useEffect(()=>{
        LoadProducts()
    },[])


  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                products.map((product) => {
                    return <InventoryRow{...product}
                    key={product.id}
                    onDelete={OpenDialog}></InventoryRow>
                })
            }
        </TableBody>
      </Table>
    </TableContainer>
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
          <Button color="error" onClick={handleClose}>Delete</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}