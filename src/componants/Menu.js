import React from "react";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-orange-700 shadow-md" x-data="{ isOpen: false }">
      <nav className="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a
            className="text-xl font-bold text-transparent bg-clip-text bg-white md:text-2xl hover:text-black text-white"
            href="#"
          >
            The Chow Down
          </a>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? false : true}
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden */}
        <div
          className={`
          flex-col mt-8 space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          ${isOpen ? "flex" : "hidden"}
        }`}
        >
          <a
            className="text-transparent bg-clip-text bg-white hover:text-black"
            href="#"
          >
            Home
          </a>
          <a
            className="text-transparent bg-clip-text bg-white hover:text-black"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-transparent bg-clip-text bg-white hover:text-black"
            href="#"
          >
            Our Menu
          </a>
          <a
            className="text-transparent bg-clip-text bg-white hover:text-black"
            href="#"
          >
            Gallery
          </a>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
