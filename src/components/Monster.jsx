import React from 'react'
import "./Monster.css"

export const Monster = ({ name, level, img, slayer, setModalOn }) => {


  const openModal = () => {
    setModalOn(true)
  }
  const favorite = false;

  return (
    <div className="monster-card w-60 p-4 bg-slate-300 m-4 mb-6 rounded-md shadow-xl">
      <div className="monster-title mb-12 rounded-md bg-slate-500 text-white p-4 shadow-xl">
        <h1 className="monster-name rounded-lg font-thick md:text-lg" >{name}</h1>
        <p className='text-sm font-thin'>{level}</p>
      </div>
      <div className="monster-img mb-6">
        <img src={img} alt="" />
      </div>
      <div className="monster-title mt-12 rounded-md bg-slate-500 text-white p-4 shadow-xl">
        <p className='text-sm font-thin'>Slayer Level: {slayer}</p>
      </div>
      <div className="buttons flex mt-4 text-white text-sm font-thin">
        <button 
          className='view-button w-3/4 p-2 mr-2 rounded-full bg-slate-500 shadow-xl'
          onClick={openModal}
          >
            View
        </button>
        <button className='w-1/4 rounded-full shadow-xl  bg-slate-500'>
          {favorite ? <i className='bx bxs-star' ></i> : <i className='bx bx-star'></i>}
        </button>
      </div>
    </div>
  )
}
