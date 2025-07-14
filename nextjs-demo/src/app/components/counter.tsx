"use client"
import React, { useState } from "react";

const Counter = () => {
    console.log("Counter components")
    const [count, setCount] = useState(0);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;
