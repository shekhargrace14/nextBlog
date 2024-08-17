import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPauseBtnFill } from "react-icons/bs";

const Featured = () => {
  return (
    <>
      <h2 className="h2">Featured Post</h2>

      <div className="md:flex gap-8 mb-8 items-center">
        <div className="md:w-1/2 ">
            <Image src="/coding.png" alt="style image" width={250} height={250} className="w-full h-full"/>
        </div>
        <div className="md:w-1/2 ">
            <div className="flex gap-4">
                <span className="text-sm text-gray-600">19.08.2024</span>
                <span className="text-sm text-red-800 uppercase">Category</span>
            </div>
            <h3 className="text-2xl font-semibold my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="mt-4" >
                <Link href="/" className="text-red-800 uppercase underline underline-offset-4">Read More</Link>
            </button>
        </div>
    </div>
    </>
  );
};

export default Featured;
