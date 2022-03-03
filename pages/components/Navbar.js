import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState("false");
  return (
    <>
      {/* NavBar goes here  */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              {/*Logo goes here*/}
              <a href="#" className="flex items-center py-5 px-2">
                <div className="h-10 w-60 relative">
                  <Image
                    src="/../public/logo.png"
                    alt="Picture of the author"
                    layout="fill" // required
                    className="rounded-full" // just an example
                  />
                </div>
              </a>

              {/*primary nav*/}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href=""
                  className="py-5 px-3 text-gray-500 hover:text-gray-900"
                >
                  About
                </a>
                <a
                  href=""
                  className="py-5 px-3 text-gray-500 hover:text-gray-900"
                >
                  Projects
                </a>
                <a
                  href=""
                  className="py-5 px-3 text-gray-500 hover:text-gray-900"
                >
                  Portfolio
                </a>
              </div>
            </div>

            {/*secondary nav*/}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded shadow hover:bg-yellow-100 duration-300"
              >
                Contact Me
              </a>
            </div>

            {/*mobile button*/}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rounded hover:bg-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/*mobile menu*/}
        <div className={mobileMenu ? "md:hidden" : "hidden"}>
          <a
            href=""
            className="block px-2 py-2 border text-gray-900 hover:text-gray-500 hover:bg-gray-300"
          >
            About
          </a>
          <a
            href=""
            className="block px-2 py-2 border text-gray-900 hover:text-gray-500 hover:bg-gray-300"
          >
            Projects
          </a>
          <a
            href=""
            className="block px-2 py-2 border text-gray-900 hover:text-gray-500 hover:bg-gray-300"
          >
            Portfolio
          </a>
          <a
            href=""
            className="block px-2 py-2 border text-gray-900 hover:text-gray-500 hover:bg-gray-300"
          >
            Contact Me
          </a>
        </div>
      </nav>
      <div className="py-32 text-center">
        {/*Content goes here */}
        <h2 className="font-extrabold text-4xl"> Samir Chowdhury </h2>
      </div>
    </>
  );
}

export default Navbar;
