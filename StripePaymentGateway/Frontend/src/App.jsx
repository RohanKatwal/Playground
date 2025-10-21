import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ProductCard from './components/ProductCard'

const App = () => {

  const product =[
    {
      name: "Wireless Headphones",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
      price: 99.99
    },
    {
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      price: 149.99
    },
    {
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      price: 59.99
    }
  ]
  return (
    <Routes>
        <Route path='/' element={
          <div className='min-h-screen bg-gray-200 flex flex-col items-center py-10'>
            <h1 className='text-4xl font-bold text-gray-800 mb-10'>Stripe Store</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                  product.map((product,index)=>(
                    <ProductCard key={index} product={product}/>
                  ))
                }
            </div>
          </div>
        }/>
    </Routes>
  )
}

export default App