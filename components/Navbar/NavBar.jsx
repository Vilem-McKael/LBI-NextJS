'use client';

import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import SideBar from './SideBar';

export default function NavBar() {

    const [isShowingMenu, setIsShowingMenu] = useState(false)
  
    const handleOnClick = (shouldShow) => {
        setIsShowingMenu(shouldShow)
    }

  return (
    <>
        <div className='flex flex-col w-full items-center px-8 mt-8 h-[180px] fixed top-0 bg-white'>
            <div className='w-full h-full flex-col justify-end max-w-[1400px]'>
                <div className='text-8xl font-bold'>
                    LehBod Inc.
                    
                </div>
                <div className='font-manrope flex flex-row justify-between items-center w-full mt-2 bg-black h-[40px]'>
                    <div className='text-xl w-full text-white pl-2'>
                        The Lehmann Boddicker Group
                    </div>
                    <button className='flex items-center text-2xl text-white font-medium cursor-pointer' onClick={() => handleOnClick(true)}>
                        <div className='flex items-center gap-2 pr-2'>
                            <div>Menu</div>
                            <CgMenuGridR />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        {isShowingMenu && <SideBar isShowingMenu={isShowingMenu} handleOnClick={handleOnClick} />}
    </>
  )
}
