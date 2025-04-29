import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { IProductProps } from '../../Interfaces/IProductProps'

function InventoryRow(props: IProductProps) {
  return (
    <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.description}</TableCell>
        <TableCell>{props.price}</TableCell>
        <TableCell>{props.stock}</TableCell>
    </TableRow>
  )
}

export default InventoryRow
