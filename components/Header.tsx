"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-indigo-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold">Task Manager</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-indigo-200 transition">
              Home
            </Link>
            <Link href="/tasks" className="hover:text-indigo-200 transition">
              Tasks
            </Link>
            <Link
              href="/tasks/add"
              className="hover:text-indigo-200 transition"
            >
              New Task
            </Link>
          </nav>

          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:bg-indigo-500"
            id="menuButton"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <nav id="mobileMenu" className="bg-indigo-700 text-white ">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-indigo-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tasks" className="hover:text-indigo-200 transition">
                Tasks
              </Link>
            </li>
            <li>
              <Link
                href="/tasks/add"
                className="hover:text-indigo-200 transition"
              >
                New Task
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
