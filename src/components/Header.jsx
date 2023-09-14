import React from 'react'
import "./Header.css"

export const Header = () => {
  return (
    <div className="header">
      <div className="header-textbox">
        <h1>iSlayer</h1>
        <p>Speed through slayer tasks, get tips, tricks and advice, and find the perfect gear setups</p>
        <div className="header-button">
          <button className='mt-6 mb-6 py-2 px-8 rounded-full bg-slate-500'>
            Tour
          </button>
        </div>
      </div>
    </div>
  )
}