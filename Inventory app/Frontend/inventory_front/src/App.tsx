import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Inventory from './Components/Inventory';
import ProductRegister from './Components/ProductRegister';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inventory/>}/>
        <Route path='/register' element={<ProductRegister/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
