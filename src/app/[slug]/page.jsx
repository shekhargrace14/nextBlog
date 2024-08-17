import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SinglePage = () => {
    return (
        <div className="md:w-4/5 w-11/12 mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
                <div className="md:w-1/2 w-full bg-red-200">
                    <Image
                        src="/coding.png"
                        alt="style image"
                        width={100}
                        height={100}
                        className="w-full h-fit object-cover"
                    />
                </div>
                <div className="sm:md:w-1/2 w-full ">
                    <div className="flex gap-4">
                        <span className="text-sm text-gray-600">19.08.2024</span>
                        <span className="text-sm text-red-800 uppercase">Category</span>
                    </div>
                    <h3 className="text-2xl font-semibold my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                    <p className="line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="mt-4">
                        <Link
                            href="/"
                            className="text-red-800 uppercase underline underline-offset-4"
                        >
                            Read More
                        </Link>
                    </button>
                </div>
            </div>
                <div>
                    <div className="md:flex gap-8 ">
                        <div className="md:w-9/12">
                            <p className="line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                        <div className="md:w-3/12">
                            <Menu />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SinglePage;
