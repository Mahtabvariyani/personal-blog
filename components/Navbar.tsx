import React from "react";

const Navbar = () => {
  return (
    <header className="p-5 text-white items-center">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="/">
                <button className="text-zinc-400 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                  Main Page{" "}
                </button>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="/Questions">
                <button className="text-zinc-400 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                  !Questions
                </button>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="/Practices">
                <button className="text-zinc-400 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                  !Practices
                </button>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="/Learn">
                <button className="text-zinc-400 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                  Going to Learn
                </button>
              </a>
            </li>
            <li>
              <a href="/Learned">
                <button className="text-zinc-400 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                  Learned
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
