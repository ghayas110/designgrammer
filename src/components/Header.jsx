"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
const router = useRouter();
  return (
    <header className="bg-white shadow-md  w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link className="mb-5.5 inline-block " href="/">
            <Image
                  className=" dark:block"
                  src={"/images/logos.png"}
                  alt="Logo"
                  width={76}
                  height={32}
                />
              </Link>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex flex-grow mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full px-4 py-2 text-sm text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
          

          
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div href="#" className="text-sm font-medium text-gray-700 hover:underline" onClick={() => router.push("/courses")}>
            Courses
          </div>
          <div href="#" className="text-sm font-medium text-gray-700 hover:underline" onClick={() => router.push("/dashboard")}>
            My Learning
          </div>
          <div href="#" className="text-sm font-medium text-gray-700 hover:underline" onClick={() => router.push("/cart")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</div>

         
          <button className="text-sm font-medium text-black hover:bg-gray-100 px-4 py-2 rounded-md border" onClick={() => router.push("/signin")}>
            Log in
          </button>
          <button className="text-sm font-medium text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md" onClick={() => router.push("/signup")}>
            Sign up
          </button>
        </div>

        {/* Hamburger Menu (visible on small screens) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            <h2 onClick={() => router.push("/courses")} className="text-sm font-medium text-gray-700 hover:underline">
            Course
            </h2>
         
         
            <button className="w-full text-sm font-medium text-black hover:bg-gray-100 px-4 py-2 rounded-md border" onClick={() => router.push("/signin")}>
              Log in
            </button>
            <button className="w-full text-sm font-medium text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md" onClick={() => router.push("/signup")}>
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
