import React from 'react'
import "./Monster.css"

export const Monster = (props) => {

  return (
    <div className="monster-card">
      <div className="monster-title">
        <h1 className="monster-name p-4 bg-slate-400" >{props.name}</h1>
        <h1>{props.level}</h1>
      </div>
      <div className="monster-img">
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}
