"use client"
import { useRouter } from "next/navigation";
export default function About() {
    const router=useRouter()
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of the Next.js demo.</p>
      <button
       onClick={()=>router.push("/")}
       className="ml-4 p-4 bg-green-950 rounded-md">go home</button>
    </div>
  );
}