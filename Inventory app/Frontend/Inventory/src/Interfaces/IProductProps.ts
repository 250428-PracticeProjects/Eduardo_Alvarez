export interface IProductProps {
    id?: number;
    name: string;
    description?: string;
    price: number;
    stock: number;
    onDelete?: (productId:number,productName:string)=>void
  }