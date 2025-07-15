
"use client";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <h2 className="text-red-500">Error fetching users data</h2>
                <p>{error.message}</p>
            </div>
        </div>
    );
}