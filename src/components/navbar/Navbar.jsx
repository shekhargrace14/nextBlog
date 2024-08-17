"use client";
import Link from "next/link";
import React from "react";
import DarkmodeToggle from "../themeToggle/DarkmodeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { RxCross1, RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    // {
    //     id: 2,
    //     title: "Portfolio",
    //     url:"/portfolio"
    // },
    {
        id: 3,
        title: "Blog",
        url:"/blog"
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    // {
    //     id: 6,
    //     title: "Dashboard",
    //     url:"/dashboard"
    // },
  ];
  const [menuOpen, setMenuOpen] = useState(true);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="md:w-4/5 w-11/12 w-full mx-auto lg-container flex justify-between items-center py-4 sm:flex-row flex-col">
      <div className=" column1 w-full items-center flex justify-between">
        <div>
          <Link className="text-2xl" href="/">
            Musicmady
          </Link>
        </div>
        <div className=" flex sm:hidden text-2xl">
          {menuOpen ? (
            <RxHamburgerMenu onClick={toggleMenu} />
          ) : (
            <RxCross1 onClick={toggleMenu} />
          )}
        </div>
      </div>
      <nav
        className={`column2 sm:flex items-center justify-between gap-4 sm:flex-row flex-col ${
          menuOpen ? "hidden" : "sm:flex mt-4 sm:mt-0 "
        }  `}
      >
        <DarkmodeToggle />

        {links.map((link) => (
          <Link
            className="text-base flex my-2 sm:my-0"
            key={link.id}
            href={link.url}
          >
            {link.title}
          </Link>
        ))}
        <AuthLinks />
      </nav>
    </div>
  );
};

export default Navbar;
