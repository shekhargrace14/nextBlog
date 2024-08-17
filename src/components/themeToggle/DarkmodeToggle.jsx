"use client"
import { Righteous } from 'next/font/google';
import React from 'react'
import { BsFillSunFill, BsMoonFill,      BsSunrise } from "react-icons/bs";
import { useState } from 'react';

const DarkmodeToggle = () => {
    // const mode = "light"
    const [mode, setMode]=useState("light")
    function changeMode(){
        setMode((prev)=>prev === "light" ? "dark" :"light")
    }
  return (
    <div className="flex w-fit h-fit gap-2 border border-2 border-black rounded-full p-1 relative cursor-pointer " onClick={changeMode}>
        <span className="text-[16px]"><BsMoonFill /></span>
        <span className="text-[16px]"><BsFillSunFill /></span>
        <span className={`w-[17px] h-[17px] rounded-full bg-[#fff] absolute ${mode ==="light" ? "left-1" : "right-1" }`}></span>
    </div>
  )
}

export default DarkmodeToggle


