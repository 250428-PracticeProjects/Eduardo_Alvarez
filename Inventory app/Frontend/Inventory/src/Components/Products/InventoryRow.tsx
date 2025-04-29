import { Button, TableCell, TableRow } from '@mui/material'
import React from 'react'
import { IProductProps } from '../../Interfaces/IProductProps'
import {  Delete, Edit,  } from '@mui/icons-material'

function InventoryRow(props: IProductProps) {

    function OpenDialogForDelete(){
        if(props.onDelete)
        {
            props.onDelete(Number(props.id), props.name)
        }
    }

  return (
    <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.description}</TableCell>
        <TableCell>{props.price}</TableCell>
        <TableCell>{props.stock}</TableCell>
        <TableCell>
            <Button onClick={OpenDialogForDelete} startIcon={<Delete/>}/>
            <Button startIcon={<Edit/>}/>
        </TableCell>
    </TableRow>
  )
}

export default InventoryRow
