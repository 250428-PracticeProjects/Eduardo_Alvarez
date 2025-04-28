import { IProductProps } from '../Interfaces/ProductProps'

function ProductSnippet(props:IProductProps) {
  return (
    <tr>
        <td>{props.productID}</td>
        <td>{props.productName}</td>
        <td>{props.description}</td>
        <td>{props.price}</td>
        <td>{props.stock}</td>
        <td><div><button>Delete</button></div></td>
    </tr>
  )
}

export default ProductSnippet