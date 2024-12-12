import React from 'react'
import moon from '../assets/moon.svg'

function Header() {
    function handleThemeControl(){
    }
  return (
    <div>
      <header className='header flex flex-row bg-white justify-between items-center p-[30px] dark:text-white dark:bg-[#2B3844]'>
        <div className='container flex flex-row justify-between mx-auto'>
        <h1 className='text-3xl'>Where in the world?</h1>
        <div className='cursor-pointer theme-control flex flex-row gap-2 items-center' onClick={handleThemeControl}>
          <img src={moon} width={25} height={25} alt="" />
          <h2>Dark mode</h2>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Header
