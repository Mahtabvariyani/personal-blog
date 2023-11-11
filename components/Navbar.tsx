import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="p-5 text-white items-center">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
           
                  <a   href={`/${link.href}`} className="hover:text-gray-500">{link.name}</a>
              
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
