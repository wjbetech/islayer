import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <div className="header bg-slate-500 text-white">
      <div className="header-textbox">
        <h1>iSlayer</h1>
        <p>A one-stop shop for speeding up slayer tasks in the game Oldschool Runescape</p>
      </div>
      <div className="header-button">
        <button className='py-2 px-4 rounded-full'>
          Tour
        </button>
      </div>
    </div>
  )
}