import axios from 'axios'
import { IProductProps } from '../Interfaces/ProductProps'
import { useNavigate } from 'react-router-dom'

function ProductSnippet(props:IProductProps) {

    const navigate = useNavigate()

    async function DeleteProduct() {
        
        try{
        await axios.delete(`http://localhost:8080/products/${props.productID}`)

        if(props.onDelete){
            props.onDelete();
        }
        navigate("/")
        } catch(fail){
            console.log(fail)
        }
    }
    
  return (
    <tr>
        <td>{props.productID}</td>
        <td>{props.productName}</td>
        <td>{props.description}</td>
        <td>{props.price}</td>
        <td>{props.stock}</td>
        <td><div><button onClick={DeleteProduct}>Delete</button></div></td>
    </tr>
  )
}

export default ProductSnippet