import React from 'react'
import "./Monster.css"

export const Monster = (props) => {

  return (
    <div className="monster-card w-1/4 p-6">
      <div className="monster-title">
        <h1 className="monster-name p-2 bg-slate-400 rounded-lg font-thin" >{props.name}</h1>
        <h1>{props.level}</h1>
      </div>
      <div className="monster-img">
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}
