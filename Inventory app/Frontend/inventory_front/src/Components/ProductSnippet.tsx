import { IProductProps } from '../Interfaces/ProductProps'

function ProductSnippet(props:IProductProps) {
  return (
    <tr>
        <td>{props.productID}</td>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.price}</td>
        <td>{props.stock}</td>
    </tr>
  )
}

export default ProductSnippet