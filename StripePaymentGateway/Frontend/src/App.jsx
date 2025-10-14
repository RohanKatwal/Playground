import React from 'react'

const App = () => {
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