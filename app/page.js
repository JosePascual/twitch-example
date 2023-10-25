"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [status, setStatus] = useState(false);

  useEffect(() => {
    const x = setTimeout(() => {
      setStatus(true);

      const y = setTimeout(() => {
        setStatus(false);
      }, 5000);

      return () => clearTimeout(y);
    }, 5000);

    return () => clearTimeout(x);
  })

  return (
    <main className="relative w-full h-screen">
      {status && <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Hello, world!</h1>
        <p className="text-2xl text-gray-700">Welcome to your Next.js app.</p>
      </div>}
    </main>
  )
}
