"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

interface NavLink {
  title: string;
  path: string;
}

const navLinks: NavLink[] = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Media",
    path: "#media",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Navbar = (): JSX.Element => {
  const [navBarOpen, setNavBarOpen] = useState<boolean | null>();

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-80 px-10 py-4">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <div className="mobile-menu block md:hidden">
          {navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <Link href={"/"} className="text-2xl md:text-5xl text-white">
          GL
        </Link>
      </div>
      <div>{navBarOpen ? <MobileMenu links={navLinks} /> : null}</div>
    </nav>
  );
};

export default Navbar;
