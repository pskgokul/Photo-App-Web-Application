'use client'
import Link from 'next/link'
import React from 'react'

export default function Landing() {
  return (
    <div className="h-screen flex flex-col">
      <div className="text-center mt-4">
        <h1 className="text-5xl font-bold">Welcome to Photon!</h1>
      </div>
      
      <div className="flex justify-center items-center flex-grow">
        <Link 
          href="/results/curated/1" // This matches your [...myParams] structure
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Proceed
        </Link>
      </div>
    </div>
  )
}
