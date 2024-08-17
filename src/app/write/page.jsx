"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from "react"
import ReactQuill from 'react-quill'

const page = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(false)
    const toggleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="md:w-4/5 w-11/12 mx-auto my-8">
            <div className="flex justify-between items-center">
                <input placeholder="Add Title" className="w-full border-none outline-none text-4xl mb-4" />
                <button className="bg-green-300 px-4 py-2 rounded">Publish</button>
            </div>

            <div className="flex">
                <button className="bg-gray-300 p-4 rounded-full mr-4"> <Image src="/plus.png" alt="plus" width={20} height={20} onClick={toggleOpen} /> </button>
                {open && (
                    <div className={`flex gap-4`}>
                        <button className="bg-gray-300 p-4 rounded-full"> <Image src="/image.png" alt="plus" width={20} height={20} /> </button>
                        <button className="bg-gray-300 p-4 rounded-full"> <Image src="/external.png" alt="plus" width={20} height={20} /> </button>
                        <button className="bg-gray-300 p-4 rounded-full"> <Image src="/video.png" alt="plus" width={20} height={20} /> </button>
                    </div>
                )}
            </div>
            <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell Your story' className='h-[50vh] w-full bg-gray-100 text-2xl' />
            
        </div>
    )
}

export default page