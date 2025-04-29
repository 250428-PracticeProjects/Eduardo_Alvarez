/* eslint-disable react/react-in-jsx-scope */
import { Add } from "@mui/icons-material"
import { Button} from "@mui/material"
import { useNavigate } from "react-router-dom"
import InventoryTable from "./InventoryTable"

function Inventory() {
  const navigate = useNavigate()

  return (
    <>
    <div>
        <header>
      <h1>Inventory</h1>
      </header>
    <div>
    <Button variant='contained' endIcon={<Add/>} onClick={()=>navigate("/register")}>Add product</Button>
    </div>
    <br/>
    <br/>
    <InventoryTable/>
    </div>
    </>
  )
}

export default Inventory