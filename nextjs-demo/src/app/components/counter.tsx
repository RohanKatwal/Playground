"use client"
import React, { useState } from "react";
import { useAuth,useUser } from "@clerk/nextjs";

const Counter = () => {

    // const {isLoaded, userId, sessionId, getToken}=useAuth()//server
    const {isLoaded, isSignedIn,user}=useUser()


    console.log("Counter components")
    const [count, setCount] = useState(0);


    // if(!isLoaded || !userId){
    if(!isLoaded || !isSignedIn){
        return null
    }

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;
