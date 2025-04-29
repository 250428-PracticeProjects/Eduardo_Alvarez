/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './Components/Products/AddProduct'
import Inventory from './Components/Products/Inventory'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inventory/>}></Route>
        <Route path='/register' element={<AddProduct/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
