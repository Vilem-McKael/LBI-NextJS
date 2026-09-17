'use client';

import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

export default function SideBar({isShowingMenu, handleOnClick}) {
  return (
    <div className={`h-full fixed top-0 w-full flex flex-col items-start p-8 sm:w-[200px] sm:fixed sm:transition-transform lg:transform ${isShowingMenu ? 'translate-x-0' : 'translate-x-full'} lg:top-0 lg:border-l duration-300 lg:right-0 border-black bg-gradient-to-b from-gray-800 to-gray-600 text-white z-10`}>
        <div className='flex w-full items-center justify-evenly p-4 text-xl font-semibold'>
            <button className='flex items-center gap-2 text-red-600 cursor-pointer' onClick={() => handleOnClick(false)}>
                <div>
                    Close
                </div>
                <FaArrowRight />
            </button>
        </div>
        <div className='flex flex-col w-full items-center space-y-4'>
            <Link href="/" className='nav-link' onClick={() => handleOnClick(false)}>
                Home
            </Link>
            <Link href="/about" className='nav-link' onClick={() => handleOnClick(false)}>
                About
            </Link>
            <Link href="/credits" className='nav-link' onClick={() => handleOnClick(false)}>
                Credits
            </Link>
        </div>
    </div>

  )
}


{/* <div className={`h-full fixed top-0 w-full flex flex-col items-start p-8 lg:w-[500px] lg:fixed lg:transition-transform lg:transform ${isShowingMenu ? 'translate-x-0' : 'translate-x-full'} lg:top-0 lg:border-l duration-300 lg:right-0 border-black bg-gradient-to-b from-gray-800 to-gray-600 text-white z-10`}>
        <div className='flex w-full items-center justify-evenly p-4 text-xl font-semibold'>
            <div>
                Menu
            </div>
            <button className='flex items-center gap-2 text-red-600 cursor-pointer' onClick={() => handleOnClick(false)}>
                <div>
                    Close
                </div>
                <FaArrowRight />
            </button>
        </div>
        <div className='flex flex-col w-full'>
            <Link href="/" onClick={() => handleOnClick(false)}>
                Home
            </Link>
            <Link href="/about" onClick={() => handleOnClick(false)}>
                About
            </Link>
            <Link href="/credits" onClick={() => handleOnClick(false)}>
                Credits
            </Link>
        </div>
    </div> */}