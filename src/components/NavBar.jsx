import React from 'react'
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className="nav bg-slate-800 text-white">
        {/* left side */}
        <div className="left">
            <h1 className='text-xl'>iSlayer</h1>
        </div>

        {/* middle */}
        <div className="middle">
            <form>
                <input 
                    type="text" 
                    className='rounded-full'
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
