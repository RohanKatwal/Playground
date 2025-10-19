import React from 'react'

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Stripe Payment Gateway</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple homepage to test TailwindCSS integration.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Test Button
      </button>
    </div>
  )
}

export default App