import React from 'react'
import "./NavBar.css"
import { useState, useEffect } from 'react'

export const NavBar = () => {

  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="nav bg-slate-800 text-white p-4">
        {/* left side */}
        <div className="left">
            <h1 className='text-xl'>iSlayer</h1>
        </div>

        {/* middle */}
        <div className="middle">
            <form >
                <input 
                    type="text" 
                    className='rounded-full text-gray-500 text-md'
                    value={search}
                    onChange={handleChange}
                    placeholder='Look up a monster'
                />
                <button
                    className='rounded-full text-sm bg-slate-500'
                >
                    Search
                </button>
            </form>
        </div>

        {/* right side */}
        <div className="right">
            <a href="https://github.com/wjbetech">
                <button>
                    <i className='bx bxl-github bx-md'></i>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/william-east-653535211/">
                <button>
                    <i className='bx bxl-linkedin bx-md'></i>
                </button>
            </a>
        </div>
    </div>
  )
}
