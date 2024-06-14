"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Pacifico } from "next/font/google";
import { MenuData } from "../data/menuData";
import { MenuCategory } from "../types/types";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <div className="logo">
            <Link href="/">
              <h1
                className={
                  pacifico.className +
                  " text-3xl hover:text-Highlight transition-text cursor-pointer"
                }
              >
                Pizzeria
              </h1>
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg transition duration-300 }`}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? "hidden" : "block"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? "block" : "hidden"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full mt-4 pb-4 border-t border-gray-800`}
          id="mobile-menu"
        >
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <span
                  className="block px-4 py-2 text-gray-300 hover:text-white cursor-pointer"
                  onClick={closeMenu}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:text-white focus:outline-none"
              >
                <span>Menu</span>
                <svg
                  className={`w-3 h-3 transition-transform transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 5"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l3 3 3-3"
                  />
                </svg>
              </button>
              <ul
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } ml-2 mt-2 space-y-2`}
              >
                {MenuData.map((category) => (
                  <li key={category.category}>
                    <Link
                      href={`/menu/${encodeURIComponent(
                        category.category.toLowerCase()
                      )}`}
                    >
                      <span
                        className="block px-8 py-2 text-gray-300 hover:text-white cursor-pointer"
                        onClick={() => {
                          closeDropdown();
                          closeMenu();
                        }}
                      >
                        {category.category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/about">
                <span
                  className="block px-4 py-2 text-gray-300 hover:text-white cursor-pointer"
                  onClick={closeMenu}
                >
                  About
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:block bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <div className="logo">
            <Link href="/">
              <h1
                className={
                  pacifico.className +
                  " text-3xl hover:text-Highlight transition-text cursor-pointer"
                }
              >
                Pizzeria
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex">
            <Link href="/">
              <span className="text-gray-300 hover:text-white px-6 py-2 transition-text cursor-pointer">
                Home
              </span>
            </Link>
            {/* Menu dropdown */}
            <div className="relative group">
              <Link href="/menu/">
                <span
                  className="text-gray-300 hover:text-white px-6 py-2 transition-text cursor-pointer "
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  onClick={closeDropdown}
                >
                  Menu
                </span>
              </Link>
              <div
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute top-full left-0 bg-gray-900 text-white shadow-lg mt-1 pt-2 rounded-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full text-center`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {MenuData.map((category) => (
                  <Link
                    key={category.category}
                    href={`/menu/${encodeURIComponent(
                      category.category.toLowerCase()
                    )}`}
                  >
                    <span
                      className="block px-4 py-2 text-sm hover:bg-gray-800 cursor-pointer"
                      onClick={closeDropdown}
                    >
                      {category.category}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about">
              <span
                className="text-gray-300 hover:text-white px-6 py-2 transition-text cursor-pointer"
                onClick={closeMenu}
              >
                About
              </span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
