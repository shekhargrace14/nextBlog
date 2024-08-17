import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex  items-center justify-center flex-col bg-gray-800  p-4 h-screen">
        <button className="bg-red-600 px-4 py-4 min-w-64 mb-4 text-white" ><Link href="#">Login with Google</Link></button>
        <button className="bg-black px-4 py-4 min-w-64 mb-4 text-white" ><Link href="#">Login with Github</Link></button>
        <button className="bg-blue-600 px-4 py-4 min-w-64 mb-4 text-white" ><Link href="#">Login with Facebook</Link></button>
    </div>
  )
}

export default page