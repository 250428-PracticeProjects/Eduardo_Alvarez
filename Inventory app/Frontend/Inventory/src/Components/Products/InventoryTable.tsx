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



export default function InventoryTable() {
const [products, setProducts] = React.useState<IProduct[]>([])
    
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
                    key={product.id}></InventoryRow>
                })
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}