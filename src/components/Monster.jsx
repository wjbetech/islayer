import React from 'react'
import "./Monster.css"

export const Monster = ({setModalOn, name, level, img, slayer}) => {

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
      <button onClick={() => setModalOn(true)}>Open</button>
    </div>
  )
}
