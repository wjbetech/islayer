import React from 'react'
import "./Monster.css"

export const Monster = (props) => {

  return (
    <div className="monster-card w-64 p-4 bg-slate-300 m-2 mb-6 rounded-md shadow-xl">
      <div className="monster-title mb-8 rounded-md bg-slate-500 text-white p-4 shadow-xl">
        <h1 className="monster-name rounded-lg font-thin text-2xl" >{props.name}</h1>
        <p>{props.level}</p>
      </div>
      <div className="monster-img mb-6">
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}
