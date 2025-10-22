import React from 'react';

export default function ProductCard({ product }) {
    const handleBuy = async() => {
        
        try {
            const data=await axios.post('http://localhost:5000/create-checkout-session', { product });
            window.location.href = data.url;
        } catch (error) {
            console.error('Error during purchase:', error);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-80 transition-transform transform hover:scale-105">
            <img
                src={product.image}
                alt={product.title || 'product'}
                className="w-64 h-64 object-cover rounded-xl mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">{product.title}</h2>
            <p className="text-gray-600 text-center mt-2">Rs. {product.price}</p>
            <button
                onClick={handleBuy}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-800 transition"
            >
                Buy Now
            </button>
        </div>
    );
}